import { test, expect } from "@playwright/test";
import { credentials } from '../config/credentials.js';

test('Login to TestDino (step-by-step)', async ({ page }) => {
  await test.step('1 - Navigate to TestDino homepage', async () => {
    await page.goto('https://app.testdino.com/');
    await expect(page).toHaveTitle(/TestDino/i);
  });

  await test.step('2 - Fill email field', async () => {
    const emailLocator = page.locator('//input[@id="email"]');
    await emailLocator.waitFor({ state: 'visible' });
    await emailLocator.fill(credentials.email);
    await expect(emailLocator).toHaveValue(credentials.email);
  });

  await test.step('3 - Fill password field', async () => {
    const passwordLocator = page.locator('//input[@id="password"]');
    await passwordLocator.waitFor({ state: 'visible' });
    await passwordLocator.fill(credentials.password);
    await expect(passwordLocator).not.toHaveValue('');
  });

  await test.step("4 - Click 'Sign In' button", async () => {
    const signInBtn = page.locator("//button[contains(text(),'Sign In')]");
    await signInBtn.waitFor({ state: 'visible' });
    await signInBtn.click();
  });

  await test.step('5 - Select the organization', async () => {
    const orgSelector = page.locator("//a[@href='/org_68fc65ba72d0bb09cede8a81/projects']");
    await orgSelector.waitFor({ state: 'visible' });
    await orgSelector.click();
  });

  await test.step('6 - Select the project', async () => {
    const projectSelector = page.locator("//a[@href='/org_68fc65ba72d0bb09cede8a81/projects/project_68fc6ba472d0bb09cede946e']");
    await projectSelector.waitFor({ state: 'visible' });
    await projectSelector.click();
  });

  await test.step('7 - Wait for dashboard / projects page to load', async () => {
    await page.waitForLoadState('networkidle');
    const testRunsHeading = page.locator("//h1[contains(text(),'Test Runs')]");
    await testRunsHeading.waitFor({ state: 'visible', timeout: 10000 });
  });

  await test.step('8 - Verify successful login by URL and UI', async () => {
    await expect(page).toHaveURL(/projects/);
    await expect(page.locator("//h1[contains(text(),'Test Runs')]")).toBeVisible();
  });
});