import { test as base } from '@playwright/test';
import { TyposPage } from '../pages/TyposPage';

type MyFixtures = {
  typosPage: TyposPage;
};

export const test = base.extend<MyFixtures>({
  typosPage: async ({ page }, use) => {
    await use(new TyposPage(page));
  },
});

export { expect } from '@playwright/test';