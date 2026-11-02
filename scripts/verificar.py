"""Comprueba enlaces locales, compila ejemplos Java y ejecuta casos de referencia.

Requiere Python 3.10+ y un JDK que admita javac --release 23.
No modifica los apuntes ni los proyectos: utiliza un directorio temporal.
"""
from pathlib import Path
from urllib.parse import unquote, urlsplit
import argparse
import itertools
import json
import os
import re
import shutil
import subprocess
import tempfile

ROOT = Path(__file__).resolve().parents[1]


def run(command, **kwargs):
    result = subprocess.run(command, encoding="utf-8", errors="replace",
                            capture_output=True, timeout=30, **kwargs)
    if result.returncode:
        raise RuntimeError(result.stderr or result.stdout or "El proceso terminó con error.")
    return result


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--jdk", type=Path, help="Carpeta del JDK, no su subcarpeta bin")
    args = parser.parse_args()
    suffix = ".exe" if os.name == "nt" else ""
    compiler = str(args.jdk / "bin" / ("javac" + suffix)) if args.jdk else shutil.which("javac")
    runtime = str(args.jdk / "bin" / ("java" + suffix)) if args.jdk else shutil.which("java")
    if not compiler or not runtime:
        raise SystemExit("No se encuentra el JDK: añade bin al PATH o utiliza --jdk.")

    documents = [ROOT / "README.md", *sorted((ROOT / "docs").rglob("*.md")),
                 *sorted((ROOT / "ejercicios").rglob("*.md"))]
    links = 0
    for document in documents:
        text = document.read_text(encoding="utf-8")
        if text.count("```") % 2:
            raise AssertionError(f"Bloque de código sin cerrar: {document}")
        for destination in re.findall(r"!?\[[^\]]*\]\(([^\n)]+)\)", text):
            parsed = urlsplit(destination)
            if parsed.scheme or destination.startswith("#"):
                continue
            target = document.parent / unquote(parsed.path)
            if not target.exists():
                raise AssertionError(f"Enlace roto en {document.relative_to(ROOT)}: {destination}")
            links += 1

    cases = json.loads((ROOT / "ejercicios/pruebas.json").read_text(encoding="utf-8"))
    snippet_count = 0
    with tempfile.TemporaryDirectory(prefix="java-notes-check-") as temporary:
        temporary = Path(temporary)
        output = temporary / "out"
        output.mkdir()
        sources = list((ROOT / "ejercicios/src").rglob("*.java"))
        # Los fragmentos se aíslan en paquetes únicos para evitar colisiones
        # de nombres; los métodos sueltos se colocan como miembros de una clase.
        for document in documents:
            for snippet in re.findall(r"```java\s*\n(.*?)```", document.read_text(encoding="utf-8"), re.S):
                snippet_count += 1
                package = f"verificacion.ejemplo{snippet_count}"
                snippet = re.sub(r"^\s*package\s+[\w.]+;\s*", "", snippet, count=1)
                class_match = re.search(r"public\s+class\s+(\w+)", snippet)
                if class_match:
                    class_name = class_match.group(1)
                    code = f"package {package};\n" + snippet
                elif re.search(r"\bstatic\s+\w+\s+\w+\s*\(", snippet):
                    class_name = "Ejemplo"
                    code = f"package {package};\npublic class Ejemplo {{\n{snippet}\n}}\n"
                else:
                    class_name = "Ejemplo"
                    code = f"package {package};\npublic class Ejemplo {{\npublic static void main(String[] args) {{\n{snippet}\n}}\n}}\n"
                destination = temporary / package.replace(".", "/") / f"{class_name}.java"
                destination.parent.mkdir(parents=True, exist_ok=True)
                destination.write_text(code, encoding="utf-8")
                sources.append(destination)
        argument_file = temporary / "fuentes.txt"
        argument_file.write_text("\n".join('"' + p.as_posix() + '"' for p in sources), encoding="utf-8")
        run([compiler, "-encoding", "UTF-8", "--release", "23", "-d", str(output), "@" + str(argument_file)])

        names = {case["exercise"]: case["class_name"] for case in cases}
        # Límites adicionales de la agenda: capacidad, vacío, nombre compuesto
        # y búsquedas antes y después de añadir.
        menu = "1 Añadir | 2 Listar | 3 Buscar | 0 Salir\n"
        actions = [("1\n\n", "Nombre vacío"), ("3\nVega\n", "No encontrado")]
        actions += [(f"1\n{n}\n", "Añadido") for n in ["Vega", "Leo", "Ana María", "Sol", "Hugo"]]
        actions += [("1\nNora\n", "Agenda llena"), ("3\nANA MARÍA\n", "Posición 2"),
                    ("2\n", "0: Vega\n1: Leo\n2: Ana María\n3: Sol\n4: Hugo"), ("0\n", "Fin")]
        cases.append(dict(exercise=24, class_name=names[24], input="".join(a for a, _ in actions),
                          expected="\n".join(menu + result for _, result in actions)))
        for permutation in itertools.permutations([2, 4, 9]):
            cases.append(dict(exercise=8, class_name=names[8], input=" ".join(map(str, permutation)) + "\n", expected="2 4 9"))
        # Repeticiones limitadas: comprobación de invariantes, no prueba estadística.
        for number in (14, 15, 16):
            original = next(c for c in cases if c["exercise"] == number and c["expected"] is None)
            cases.extend([dict(original) for _ in range(9)])
        for case in cases:
            result = run([runtime, "-Dfile.encoding=UTF-8", "-Dstdin.encoding=UTF-8",
                          "-Dstdout.encoding=UTF-8", "-Dstderr.encoding=UTF-8",
                          "-cp", str(output), case["class_name"]], input=case["input"])
            actual = result.stdout.replace("\r\n", "\n").strip()
            if case["expected"] is not None:
                expected = case["expected"].strip()
                if actual != expected:
                    raise AssertionError(f"{case['class_name']}, entrada={case['input']!r}:\nesperado={expected!r}\nobtenido={actual!r}")
            elif case["exercise"] == 14:
                a, b, total = map(int, actual.split())
                assert 1 <= a <= 6 and 1 <= b <= 6 and total == a + b, actual
            elif case["exercise"] == 15:
                values = list(map(int, actual.split()))
                assert len(values) == 10 and all(20 <= v <= 25 for v in values), actual
            elif case["exercise"] == 16:
                lines = actual.splitlines()
                attempts = int(lines[-1].removeprefix("Acertaste en "))
                assert 1 <= attempts <= 20 and len(lines) == attempts, actual
                assert all(line == "Mayor" for line in lines[:-1]), actual
            else:
                raise AssertionError("Falta una condición de prueba para el ejercicio aleatorio.")
        compiler_version = run([compiler, "-version"]).stdout.strip()
        runtime_version = run([runtime, "-version"]).stderr.splitlines()[0]
        print(json.dumps(dict(markdown_documents=len(documents), local_links=links,
                              java_snippets=snippet_count, runnable_programs=len(names),
                              executed_cases=len(cases), compiler=compiler_version,
                              target_release=23, runtime=runtime_version), ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
