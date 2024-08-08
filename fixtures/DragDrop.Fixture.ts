import { test as base } from '@playwright/test';
import { DragAndDropPage } from '../pages/DragDropPage';

type MyFixtures = {
  dragAndDropPage: DragAndDropPage;
};

export const test = base.extend<MyFixtures>({
  dragAndDropPage: async ({ page }, use) => {
    const dragAndDropPage = new DragAndDropPage(page);
    await use(dragAndDropPage);
  },
});

export { expect } from '@playwright/test';