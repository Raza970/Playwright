import { expect, test } from "../fixtures/DragDrop.fixture";

test.describe('Drag and Drop Page Tests', () => {
  test.beforeEach(async ({ dragAndDropPage }) => {
    await dragAndDropPage.goTo();
  });

  test('should drag element B and A', async ({ dragAndDropPage }) => {
    await dragAndDropPage.dragAndDrop('#column-a', '#column-b');
  });

  test('should drag element A to element B', async ({ dragAndDropPage }) => {
    await dragAndDropPage.dragAndDrop('#column-b', '#column-a');
    
  });
});