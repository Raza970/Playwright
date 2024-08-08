import { test, expect } from '../fixtures/RadioButtonsFixture';

// import { test, expect } from './fixture';

test.describe('Radio Button Page Tests', () => {
  test.beforeEach(async ({ radioButtonPage }) => {
    await radioButtonPage.goTo();
  });

  test('should select favorite color', async ({ radioButtonPage }) => {
    await radioButtonPage.selectColor('red');
    const selectedColor = await radioButtonPage.getSelectedColor();
    expect(selectedColor).toBe('red');
  });

  test('should select favorite sport', async ({ radioButtonPage }) => {
    await radioButtonPage.selectSport('football');
    const selectedSport = await radioButtonPage.getSelectedSport();
    expect(selectedSport).toBe('football');
  });
});



















// test.describe('Radio Buttons Page', () => {
//   test.beforeEach(async ({ radioButtonsPage }) => {
//     console.log('Before each test: navigating to the page.');
//     await radioButtonsPage.goto();
//     console.log('Navigation in beforeEach complete.');
//   });

//   test('should select favorite color and sport', async ({ radioButtonsPage, page }) => {
//     console.log('Test: should select favorite color and sport.');
//     await radioButtonsPage.selectFavoriteColor('Red');
//     await radioButtonsPage.selectFavoriteSport('Football');

//     const isColorSelected = await radioButtonsPage.isColorSelected('Red');
//     const isSportSelected = await radioButtonsPage.isSportSelected('Football');

//     if (!isColorSelected || !isSportSelected) {
//       await page.screenshot({ path: 'error-screenshot.png' }); // Take a screenshot if the element is not visible
//     }

//     expect(isColorSelected).toBeTruthy();
//     expect(isSportSelected).toBeTruthy();
//     console.log('Test completed successfully.');
//   });
// });