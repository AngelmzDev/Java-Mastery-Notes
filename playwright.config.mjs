import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './tests/web',
  use: {baseURL:'http://127.0.0.1:4321/Java-Mastery-Notes/',browserName:'chromium'},
  webServer: {
    command: 'npm run preview -- --host 127.0.0.1 --port 4321',
    url:'http://127.0.0.1:4321/Java-Mastery-Notes/',
    reuseExistingServer: !process.env.CI,
    timeout: 60000
  }
});
