import { test, expect } from '@playwright/test';
import { ShadowDomPage } from '../pages/ShadowDomPage';

test.describe('Shadow DOM Tests', () => {
  let shadowDomPage: ShadowDomPage;

  test.beforeEach(async ({ page }) => {
    shadowDomPage = new ShadowDomPage(page);
    await page.goto('https://practice.expandtesting.com/shadowdom'); 
  });

  test('should click button inside shadow DOM', async () => {
    await shadowDomPage.clickShadowButton();
    // const buttonText = await shadowDomPage.getShadowButtonText();
    // expect(buttonText).toBe("Here's a basic button example.");
  });
});