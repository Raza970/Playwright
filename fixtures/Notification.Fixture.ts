import { test as base } from '@playwright/test';
import { NotificationPage } from '../pages/NotificationPage';

type MyFixtures = {
  notificationPage: NotificationPage;
};

export const test = base.extend<MyFixtures>({
  notificationPage: async ({ page }, use) => {
    const notificationPage = new NotificationPage(page);
    await use(notificationPage);
  },
});

export { expect } from '@playwright/test';