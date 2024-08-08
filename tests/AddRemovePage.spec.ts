import { expect, test } from "../fixtures/AddRemoveElement.Fixture";


test.describe('Add/Remove Elements Tests', () => {
  test('should add an element', async ({ addRemoveElementsPage }) => {
    // Navigate to the add/remove elements page
    await addRemoveElementsPage.goTo();

    // Add an element
    await addRemoveElementsPage.addElement();

    // Assert that an element is added
    const elementCount = await addRemoveElementsPage.countElements();
    expect(elementCount).toBe(1);
  });

  test('should delete an element', async ({ addRemoveElementsPage }) => {
    // Navigate to the add/remove elements page
    await addRemoveElementsPage.goTo();

    // Add an element
    await addRemoveElementsPage.addElement();

    // Delete the element
    await addRemoveElementsPage.deleteElement();

    // Assert that no elements are present
    const elementCount = await addRemoveElementsPage.countElements();
    expect(elementCount).toBe(0);
  });
});