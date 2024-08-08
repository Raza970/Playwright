import { test as baseTest } from '@playwright/test';
import { SlowResourcesPage } from '../pages/SlowResourcePage';

type MyFixtures = {
    slowResourcesPage: SlowResourcesPage;
};

export const test = baseTest.extend<MyFixtures>({
    slowResourcesPage: async ({ page }, use) => {
        const slowResourcesPage = new SlowResourcesPage(page);
        await slowResourcesPage.goto();
        await use(slowResourcesPage);
    },
});

export { expect } from '@playwright/test';