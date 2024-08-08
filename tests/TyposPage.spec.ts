import { expect, test } from "../fixtures/Typos.Fixture";

test.describe('Typos Page Tests', () => {
  test.beforeEach(async ({ typosPage }) => {
    await typosPage.goTo();
  });

  test('should verify the page title', async ({ typosPage }) => {
    const pageTitle = await typosPage.getPageTitle();
    expect(pageTitle).toBe('Typos page for Automation Testing Practice');
  });

  test('should verify the paragraph text contains a typo', async ({ typosPage }) => {
    const hasTypo = await typosPage.checkForTypos();
    expect(hasTypo).toBe(true);
  });
});