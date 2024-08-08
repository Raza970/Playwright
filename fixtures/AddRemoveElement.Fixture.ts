import { test as base } from '@playwright/test';
import { AddRemoveElementsPage } from '../pages/AddRemovePage';

type MyFixtures = {
  addRemoveElementsPage: AddRemoveElementsPage;
};

export const test = base.extend<MyFixtures>({
  addRemoveElementsPage: async ({ page }, use) => {
    const addRemoveElementsPage = new AddRemoveElementsPage(page);
    await use(addRemoveElementsPage);
  },
});

export { expect } from '@playwright/test';