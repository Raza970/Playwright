import { test as base } from '@playwright/test';
import { ChallengingDOMPage } from '../pages/ChallangeDompage';

type MyFixtures = {
  challengingDOMPage: ChallengingDOMPage;
};

export const test = base.extend<MyFixtures>({
  challengingDOMPage: async ({ page }, use) => {
    const challengingDOMPage = new ChallengingDOMPage(page);
    await use(challengingDOMPage);
  },
});

export { expect } from '@playwright/test';