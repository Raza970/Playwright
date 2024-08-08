import { test as base } from '@playwright/test';
import { RadioButtonPage } from '../pages/RadioButtonsPage';
// import { RadioButtonPage } from './pages';

type MyFixtures = {
  radioButtonPage: RadioButtonPage;
};

export const test = base.extend<MyFixtures>({
  radioButtonPage: async ({ page }, use) => {
    const radioButtonPage = new RadioButtonPage(page);
    await use(radioButtonPage);
  },
});

export { expect } from '@playwright/test';



















// import { test as baseTest } from '@playwright/test';
// import { RadioButtonsPage } from '../pages/RadioButtonsPage';

// type RadioButtonsFixture = {
//   radioButtonsPage: RadioButtonsPage;
// };

// export const test = baseTest.extend<RadioButtonsFixture>({
//   radioButtonsPage: async ({ page }, use) => {
//     const radioButtonsPage = new RadioButtonsPage(page);
//     await use(radioButtonsPage);
//   }
// });

// export { expect } from '@playwright/test';