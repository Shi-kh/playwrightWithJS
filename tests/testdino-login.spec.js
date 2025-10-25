import { test, expect } from "@playwright/test";
import { credentials } from '../config/credentials.js';
import { loginLocators } from '../locators/login.locator.js';

test('Login to TestDino (step-by-step)', async ({ page }) => {
  await test.step('1 - Navigate to TestDino homepage', async () => {
    await page.goto('https://app.testdino.com/');
    await expect(page).toHaveTitle(/TestDino/i);
  });

  await test.step('2 - Fill email field', async () => {
    const emailLocator = page.locator(loginLocators.emailInput);
    await emailLocator.waitFor({ state: 'visible' });
    await emailLocator.fill(credentials.email);
    await expect(emailLocator).toHaveValue(credentials.email);
  });

  await test.step('3 - Fill password field', async () => {
    const passwordLocator = page.locator(loginLocators.passwordInput);
    await passwordLocator.waitFor({ state: 'visible' });
    await passwordLocator.fill(credentials.password);
    await expect(passwordLocator).not.toHaveValue('');
  });

  await test.step("4 - Click 'Sign In' button", async () => {
    const signInBtn = page.locator(loginLocators.signInButton);
    await signInBtn.waitFor({ state: 'visible' });
    await signInBtn.click();
  });

  await test.step('5 - Select the organization', async () => {
    const orgSelector = page.locator(loginLocators.orgLink);
    await orgSelector.waitFor({ state: 'visible' });
    await orgSelector.click();
  });

  await test.step('6 - Select the project', async () => {
    const projectSelector = page.locator(loginLocators.projectLink);
    await projectSelector.waitFor({ state: 'visible' });
    await projectSelector.click();
  });

  await test.step('7 - Wait for dashboard / projects page to load', async () => {
    await page.waitForLoadState('networkidle');
    const testRunsHeading = page.locator(loginLocators.testRunsHeading);
    await testRunsHeading.waitFor({ state: 'visible', timeout: 10000 });
  });

  await test.step('8 - Verify successful login by URL and UI', async () => {
    await expect(page).toHaveURL(/projects/);
    await expect(page.locator(loginLocators.testRunsHeading)).toBeVisible();
  });
});
