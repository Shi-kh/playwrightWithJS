export class LoginPage {
  constructor(page) {
    this.page = page;
    // centralize locators here
    this.locators = {
      emailInput: '//input[@id="email"]',
      passwordInput: '//input[@id="password"]',
      signInButton: "//button[contains(text(),'Sign In')]",
      orgLink: "//a[@href='/org_68fc65ba72d0bb09cede8a81/projects/project_68fc6ba472d0bb09cede946e']",
      projectLink: "//h3[@title='Reelo']",
      testRunsHeading: "//h1[contains(text(),'Test Runs')]",
    };
  }

  async goto() {
    await this.page.goto('https://app.testdino.com/', { waitUntil: 'domcontentloaded' });
    await this.page.waitForLoadState();
  //   await expect.poll(async () => await page.title(), {
  //   timeout: 30_000,
  //  }).not.toMatch(/just a moment/i);
  }

  async fillEmail(email) {
    const emailLocator = this.page.locator(this.locators.emailInput);
    await emailLocator.waitFor({ state: 'visible' });
    await emailLocator.fill(email);
    return emailLocator;
  }

  async fillPassword(password) {
    const passwordLocator = this.page.locator(this.locators.passwordInput);
    await passwordLocator.waitFor({ state: 'visible' });
    await passwordLocator.fill(password);
    return passwordLocator;
  }

  async clickSignIn() {
    const signInBtn = this.page.locator(this.locators.signInButton);
    await signInBtn.waitFor({ state: 'visible' });
    await signInBtn.click();
    return signInBtn;
  }

  async selectOrg() {
    const orgSelector = this.page.locator(this.locators.orgLink);
    await orgSelector.waitFor({ state: 'visible' });
    await orgSelector.click();
    return orgSelector;
  }

  async selectProject() {
    const projectSelector = this.page.locator(this.locators.projectLink);
    await projectSelector.waitFor({ state: 'visible' });
    await projectSelector.click();
    return projectSelector;
  }

  async waitForDashboard(timeout = 10000) {
    const testRunsHeading = this.page.locator(this.locators.testRunsHeading);
    await testRunsHeading.waitFor({ state: 'visible', timeout });
    return testRunsHeading;
  }

  // helper to navigate to project list (used in the original spec)
  async gotoProjectsList() {
    await this.page.goto('https://app.testdino.com/org_68fc65ba72d0bb09cede8a81/projects');
    await this.page.waitForLoadState('networkidle');
  }
}

export default LoginPage;
