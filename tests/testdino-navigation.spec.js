import { test, expect } from "@playwright/test";
import { credentials } from '../config/credentials.js';
import LoginPage from '../pages/login.page.js';
import E2EPage from '../pages/e2e.page.js';

test('Navigate sidebar icons and verify headings', async ({ page }) => {
  const login = new LoginPage(page);
  const e2e = new E2EPage(page);

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
    await login.waitForDashboard(60000);
  });

  await test.step('8 - Click Dashboard icon and verify name', async () => {
    const heading = await e2e.clickAndVerify(e2e.locators.dashboardIcon, e2e.locators.dashboardHeading);
    await expect(heading).toHaveText(/Dashboard/i);
    await page.waitForTimeout(3000);
  });

  await test.step('9 - Click Pull Requests icon and verify name', async () => {
    const heading = await e2e.clickAndVerify(e2e.locators.pullRequestIcons, e2e.locators.pullRequestsHeading);
    await expect(heading).toHaveText(/Pull Requests/i);
    await page.waitForTimeout(3000);
  });

  await test.step('10 - Click Test Runs icon and verify name', async () => {
    const heading = await e2e.clickAndVerify(e2e.locators.testRunsIcon, e2e.locators.testRunsHeading);
    await expect(heading).toHaveText(/Test Runs/i);
    await page.waitForTimeout(3000);
  });

  await test.step('11 - Click Specs icon and verify name', async () => {
    const heading = await e2e.clickAndVerify(e2e.locators.specsIcons, e2e.locators.specsHeading);
    await expect(heading).toHaveText(/Specs/i);
    await page.waitForTimeout(3000);
  });

  await test.step('12 - Click Analytics icon and verify name', async () => {
    const heading = await e2e.clickAndVerify(e2e.locators.analyticsIcon, e2e.locators.analyticsHeading);
    await expect(heading).toHaveText(/Analytics/i);
    await page.waitForTimeout(3000);
  });

  await test.step('13 - Click AI Insights icon and verify name', async () => {
    const heading = await e2e.clickAndVerify(e2e.locators.aiInsightsIcon, e2e.locators.aiInsightsHeading);
    await expect(heading).toHaveText(/AI Insights/i);
    await page.waitForTimeout(3000);
  });

  await test.step('14 - Click Test Cases icon and verify name', async () => {
    const heading = await e2e.clickAndVerify(e2e.locators.testcasesIcon, e2e.locators.testcasesHeading);
    await expect(heading).toHaveText(/Test Cases/i);
    await page.waitForTimeout(3000);
  });

  await test.step('15 - Click Permissions icon and verify name', async () => {
    const heading = await e2e.clickAndVerify(e2e.locators.permissionIcons, e2e.locators.permissionsHeading);
    await expect(heading).toBeVisible();
    await page.waitForTimeout(3000);
  });

  await test.step('16 - Click Settings icon and verify name', async () => {
    const heading = await e2e.clickAndVerify(e2e.locators.settingIcons, e2e.locators.settingsHeading);
    await expect(heading).toHaveText(/Project Settings/i);
  });
});