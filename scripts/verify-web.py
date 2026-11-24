"""Verify generated HTML routes, internal links and search assets.
Broken local fragments are reported separately to support legacy anchor migration.
Use --strict-fragments to make fragment mismatches fail too.
"""
from collections import defaultdict
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlsplit
import sys

BASE = '/Java-Mastery-Notes/'
ROOT = Path('dist')
ORIGIN = 'https://angelmzdev.github.io'

class Page(HTMLParser):
    def __init__(self, text):
        super().__init__(convert_charrefs=True)
        self.ids = set()
        self.links = []
        self.feed(text)

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if a.get('id'):
            self.ids.add(a['id'])
        if tag == 'a' and a.get('href'):
            self.links.append(a['href'])

def public_path(file):
    rel = file.relative_to(ROOT).as_posix()
    return BASE + (rel[:-len('index.html')] if rel.endswith('index.html') else rel)

def resolve(url):
    path = unquote(urlsplit(url).path)
    if not path.startswith(BASE):
        return None
    rel = path[len(BASE):]
    target = ROOT / rel
    if target.is_dir() or path.endswith('/'):
        target = target / 'index.html'
    elif not target.exists() and not target.suffix:
        target = target / 'index.html'
    return target

def main():
    pages = {p: Page(p.read_text(encoding='utf-8')) for p in ROOT.rglob('*.html')}
    expected = ['index.html', 'clases/index.html', 'colecciones/guia-integrada/index.html',
                'laboratorio/trazas/index.html', 'laboratorio/colocacion/index.html']
    expected += [f'clases/apuntes/dia-{i:02d}/index.html' for i in range(2, 11)]
    expected += [f'clases/dia-{i:02d}/index.html' for i in range(2, 11)]
    missing = [x for x in expected if ROOT / x not in pages]
    if not (ROOT / 'pagefind/pagefind.js').is_file():
        missing.append('pagefind/pagefind.js')
    broken = defaultdict(set)
    fragments = defaultdict(set)
    for p, page in pages.items():
        here = ORIGIN + public_path(p)
        for href in page.links:
            if href.startswith(('mailto:', 'tel:', 'javascript:')):
                continue
            u = urlsplit(urljoin(here, href))
            if u.netloc != urlsplit(ORIGIN).netloc or u.scheme not in ('http', 'https'):
                continue
            target = resolve(u.geturl())
            if target is None or not target.is_file():
                broken[href].add(public_path(p))
                continue
            if u.fragment and target in pages and unquote(u.fragment) not in pages[target].ids:
                fragments[href].add(public_path(p))
    print(f'HTML pages: {len(pages)}; missing required paths: {len(missing)}')
    for x in missing:
        print('Missing:', x)
    print(f'Broken local paths: {len(broken)}')
    for href, src in sorted(broken.items()):
        print('Broken:', href, 'from', ', '.join(sorted(src)[:3]))
    print(f'Unmatched legacy fragments: {len(fragments)}')
    for href, src in sorted(fragments.items()):
        print('Fragment:', href, 'from', ', '.join(sorted(src)[:3]))
    if missing or broken or ('--strict-fragments' in sys.argv and fragments):
        return 1
    return 0

if __name__ == '__main__':
    sys.exit(main())
