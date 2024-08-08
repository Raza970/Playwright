import { test as baseTest } from '@playwright/test';
import { MyIPPage } from '../pages/MyIpPage';

// Extend the basic test to include our page object model
type MyFixtures = {
    myIPPage: MyIPPage;
};

export const test = baseTest.extend<MyFixtures>({
    myIPPage: async ({ page }, use) => {
        const myIPPage = new MyIPPage(page);
        await myIPPage.goto();
        await use(myIPPage);
    },
});

export { expect } from '@playwright/test';
