import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    reporter: [
      ['html', { outputDir: 'playwright-report' }],
      ['json', { outputFile: 'playwright-report/report.json' }],
    ],
  },
});

// import { defineConfig } from "@playwright/test";

// export default defineConfig({
//   testDir: "./tests",
//   reporter: [["html", { outputFolder: "playwright-report" }]],
//   use: { headless: true },
// });

