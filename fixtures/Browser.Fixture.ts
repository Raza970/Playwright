import { test as baseTest } from '@playwright/test';
import { BrowserInfoPage } from '../pages/BrowserPage';
// import { BrowserInfoPage } from '../pages/BrowserInfoPage';

type BrowserInfoFixture = {
  browserInfoPage: BrowserInfoPage;
};

export const test = baseTest.extend<BrowserInfoFixture>({
  browserInfoPage: async ({ page }, use) => {
    const browserInfoPage = new BrowserInfoPage(page);
    await use(browserInfoPage);
  }
});

export { expect } from '@playwright/test';