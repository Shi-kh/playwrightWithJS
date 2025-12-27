import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    // storageState: 'auth.json',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    baseURL: 'https://app.testdino.com/',
  },
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['json', { outputFile: 'playwright-report/report.json' }]
  ]
});
//npx playwright test tests/testdino-login.spec.js --headed                                                                                                                                                                                                                                                                                                                                                                                                              