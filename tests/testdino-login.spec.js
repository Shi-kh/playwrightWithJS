import { test, expect } from "@playwright/test";
import { credentials } from '../config/credentials.js';
import LoginPage from '../pages/login.page.js';

test('Login to TestDino (step-by-step)', async ({ page }) => {
  const login = new LoginPage(page);

  await test.step('1 - Navigate to TestDino homepage', async () => {
    await login.goto();
    await expect(page).toHaveTitle(/TestDino/i);
  });

  await test.step('2 - Fill email field', async () => {
    const emailLocator = await login.fillEmail(credentials.email);
    await expect(emailLocator).toHaveValue(credentials.email);
  });

  await test.step('3 - Fill password field', async () => {
    const passwordLocator = await login.fillPassword(credentials.password);
    await expect(passwordLocator).not.toHaveValue('');
  });

  await test.step("4 - Click 'Sign In' button", async () => {
    await login.clickSignIn();
  });

  await test.step('5 - Select the organization', async () => {
    await login.selectOrg();
  });

  await test.step('6 - Select the project', async () => {
    await login.selectProject();
  });

  await test.step('7 - Wait for dashboard / projects page to load', async () => {
    await page.waitForLoadState('networkidle');
    await login.waitForDashboard(10000);
  });

  await test.step('8 - Verify successful login by URL and UI', async () => {
    await expect(page).toHaveURL(/projects/);
    await expect(page.locator(login.locators.testRunsHeading)).toBeVisible();
  });

  // await test.step('9 - Verify Test Run entry visible on dashboard', async () => {
  //   const testRunRow = page.locator("//div[contains(text(),'Playwright Test Report')]");
  //   await testRunRow.waitFor({ state: 'visible', timeout: 15000 });
  //   await expect(testRunRow).toBeVisible();
  // });
});
// trx_{environment}_{key}.