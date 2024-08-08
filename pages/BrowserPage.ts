import { Page } from '@playwright/test';

export class BrowserInfoPage {
  readonly page: Page;
  readonly showBrowserInfoButton: string = 'text="Show Browser Information"';
  readonly HideBrowserInfoButton: string = 'text="Hide Browser Information"';
  readonly browserInfoSelector: string = '#browser-info';

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://practice.expandtesting.com/my-browser'); // Replace with your actual URL
  }

  async clickShowBrowserInfo() {
    await this.page.click(this.showBrowserInfoButton);
    await this.page.click(this.HideBrowserInfoButton);
  }

  async isBrowserInfoVisible() {
    return await this.page.isVisible(this.browserInfoSelector); // Replace with actual selector for the browser info
  }
}