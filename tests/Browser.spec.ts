// import { test, expect } from '../fixtures/BrowserInfoFixture';

import { expect, test } from "../fixtures/Browser.fixture";

test.describe('Browser Information Page', () => {
  test.beforeEach(async ({ browserInfoPage }) => {
    await browserInfoPage.goto();
  });

  test('should display browser information on button click', async ({ browserInfoPage }) => {
    await browserInfoPage.clickShowBrowserInfo();
    const isVisible = await browserInfoPage.isBrowserInfoVisible();
    expect(isVisible).toBeTruthy();
  });
});