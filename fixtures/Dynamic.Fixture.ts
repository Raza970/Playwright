import { test as base } from '@playwright/test';
import { DynamicTablePage } from '../pages/DynamicTablePage';

type MyFixtures = {
  dynamicTablePage: DynamicTablePage;
};

export const test = base.extend<MyFixtures>({
  dynamicTablePage: async ({ page }, use) => {
    const dynamicTablePage = new DynamicTablePage(page);
    await use(dynamicTablePage);
  },
});

export { expect } from '@playwright/test';









































// import { test as baseTest } from "@playwright/test";
// import { DynamicTablePage } from "../pages/DynamicTablePage";

// type Pages = {
//   dynamicTablePage: DynamicTablePage;
// };

// const test = baseTest.extend<Pages>({
//   dynamicTablePage: async ({ page }, use) => {
//     await use(new DynamicTablePage(page));
//   },
// });

// export { test };
// export const dynamic = test.expect;
