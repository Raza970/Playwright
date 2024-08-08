import { test as base } from '@playwright/test';
import { FormValidationPage } from '../pages/FormValidationPage';
// import { FormValidationPage } from './pages';

type MyFixtures = {
  formValidationPage: FormValidationPage;
};

export const test = base.extend<MyFixtures>({
  formValidationPage: async ({ page }, use) => {
    const formValidationPage = new FormValidationPage(page);
    await use(formValidationPage);
  },
});

export { expect } from '@playwright/test';