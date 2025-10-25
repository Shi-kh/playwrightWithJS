// import { defineConfig } from "@playwright/test";

// export default defineConfig({
//   testDir: "./tests",
//   reporter: [
//     ["list"],
//     ["@testdino/playwright-reporter", {
//       apiKey: process.env.TESTDINO_API_KEY,
//     }],
//   ],
//   use: {
//     headless: true,
//   },
// });
import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  reporter: [["html", { outputFolder: "playwright-report" }]],
  use: { headless: true },
});

