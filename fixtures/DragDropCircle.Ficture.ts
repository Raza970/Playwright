import { test as base } from '@playwright/test';
import { DragAndDropCirclesPage } from '../pages/DragDropCircle.page';
// import { DragAndDropCirclesPage } from './pages';

type Fixtures = {
  dragAndDropCirclesPage: DragAndDropCirclesPage;
};

export const test = base.extend<Fixtures>({
  dragAndDropCirclesPage: async ({ page }, use) => {
    const dragAndDropCirclesPage = new DragAndDropCirclesPage(page);
    await use(dragAndDropCirclesPage);
  },
});

export { expect } from '@playwright/test';
