import { expect, test } from "../fixtures/ChallaneDom.Fixture";

test.describe('Challenging DOM Page Tests', () => {
//   test.only('should display correct button labels', async ({ challengingDOMPage }) => {
//     await challengingDOMPage.goTo();

//     const buttonLabels = await challengingDOMPage.getButtonLabels();
//     expect(buttonLabels).toEqual(['foo', 'bar', 'foo']);
//   });

  test('should display correct table data and handle actions', async ({ challengingDOMPage }) => {
    await challengingDOMPage.goTo();

    // Check specific table cell content
    const cellContent = await challengingDOMPage.getTableData(0, 0); // Row 1, Column 1
    expect(cellContent).toBe('Iuvaret0');

    // Click edit button on the first row
    await challengingDOMPage.clickEditButton(0);
    // You can add assertions here to verify the result of the click action

    // Click delete button on the first row
    await challengingDOMPage.clickDeleteButton(0);
    // You can add assertions here to verify the result of the click action
  });

  test('should have a canvas element on the page', async ({ challengingDOMPage }) => {
    await challengingDOMPage.goTo();

    const canvasExists = await challengingDOMPage.canvasExists();
    expect(canvasExists).toBe(true);
  });
});