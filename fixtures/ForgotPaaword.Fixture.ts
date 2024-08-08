import { test as base } from '@playwright/test';
import { ForgotPasswordPage } from '../pages/ForgotPasswordPage';

type MyFixtures = {
  forgotPasswordPage: ForgotPasswordPage;
};

export const test = base.extend<MyFixtures>({
  forgotPasswordPage: async ({ page }, use) => {
    const forgotPasswordPage = new ForgotPasswordPage(page);
    await use(forgotPasswordPage);
  },
});

export { expect } from '@playwright/test';