import { test as base } from '@playwright/test';
import { FileUploaderPage } from '../pages/FileUploadPage';

type MyFixtures = {
  fileUploaderPage: FileUploaderPage;
};

export const test = base.extend<MyFixtures>({
  fileUploaderPage: async ({ page }, use) => {
    const fileUploaderPage = new FileUploaderPage(page);
    await use(fileUploaderPage);
  },
});

export { expect } from '@playwright/test';