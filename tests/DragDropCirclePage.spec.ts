import { expect, test } from '../fixtures/DragDropCircle.Ficture';

test.describe('Drag and Drop Circles Page Tests', () => {
  test.beforeEach(async ({ dragAndDropCirclesPage }) => {
    await dragAndDropCirclesPage.goTo();
  });

  test('should drag all circles to the target', async ({ dragAndDropCirclesPage }) => {
    await dragAndDropCirclesPage.dragCircleToTarget('red');
    await dragAndDropCirclesPage.dragCircleToTarget('green');
    await dragAndDropCirclesPage.dragCircleToTarget('blue');
    const isInTarget = await dragAndDropCirclesPage.isCircleInTarget('red', 'green', 'blue');
    expect(isInTarget).toBe(true);
  });

  test('should drag a red circle to the target', async ({ dragAndDropCirclesPage }) => {
    await dragAndDropCirclesPage.dragCircleToTarget('red');
    const isInTarget = await dragAndDropCirclesPage.isCircleInTarget('red');
    expect(isInTarget).toBe(true);
  });

  test('should drag a green circle to the target', async ({ dragAndDropCirclesPage }) => {
    await dragAndDropCirclesPage.dragCircleToTarget('green');
    const isInTarget = await dragAndDropCirclesPage.isCircleInTarget('green');
    expect(isInTarget).toBe(true);
  });

  test('should drag a blue circle to the target', async ({ dragAndDropCirclesPage }) => {
    await dragAndDropCirclesPage.dragCircleToTarget('blue');
    const isInTarget = await dragAndDropCirclesPage.isCircleInTarget('blue');
    expect(isInTarget).toBe(true);
  });
});
