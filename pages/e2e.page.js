export class E2EPage {
  constructor(page) {
    this.page = page;
    // centralize locators here
    this.locators = {
      dashboardIcon: '(//span[contains(text(),"Dashboard")])[1]',
      dashboardHeading: '//h1[contains(text(),"Dashboard")]',
      pullRequestIcons: '(//span[contains(text(),"Pull Requests")])[1]',
      pullRequestsHeading: '//h1[contains(text(),"Pull Requests")]',
      testRunsIcon: '(//span[contains(text(),"Test Runs")])[1]',
      testRunsHeading: '//h1[contains(text(),"Test Runs")]',
      specsIcons: '(//span[contains(text(),"Specs")])[1]',
      specsHeading: '//h1[contains(text(),"Specs")]',
      analyticsIcon: '(//span[contains(text(),"Analytics")])[1]',
      analyticsHeading: '//h1[contains(text(),"Analytics")]',
      aiInsightsIcon: '(//span[contains(text(),"AI Insights")])[1]',
      aiInsightsHeading: '//h1[contains(text(),"AI Insights")]',
      testcasesIcon: '(//span[contains(text(),"Test Cases")])[1]',
      testcasesHeading: '//h1[contains(text(),"Test Cases")]',
      permissionIcons: '(//span[contains(text(),"Permissions")])[1]',
      permissionsHeading: '//h1[contains(text(),"Project Users Roles")]',
      settingIcons: '(//span[contains(text(),"Settings")])[1]',
      settingsHeading: '//h1[contains(text(),"Project Settings")]',
    };
  }

  /**
   * Clicks a sidebar icon identified by the provided locator and returns the icon locator
   */
  async clickIcon(iconLocator) {
    const el = this.page.locator(iconLocator);
    await el.waitFor({ state: 'visible', timeout: 15000 });
    await el.click();
    return el;
  }

  /**
   * Returns a heading locator and ensures it's visible
   */
  async getHeading(headingLocator) {
    const heading = this.page.locator(headingLocator);
    await heading.waitFor({ state: 'visible', timeout: 15000 });
    return heading;
  }

  /**
   * Clicks an icon and verifies the target heading becomes visible
   */
  async clickAndVerify(iconLocator, headingLocator) {
    await this.clickIcon(iconLocator);
    const heading = await this.getHeading(headingLocator);
    return heading;
  }
}

export default E2EPage;