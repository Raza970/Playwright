import { test as baseTest } from '@playwright/test';
import { DownloadPage } from '../pages/FileDownloadPage';

type MyFixtures = {
    downloadPage: DownloadPage;
};

export const test = baseTest.extend<MyFixtures>({
    downloadPage: async ({ page }, use) => {
        const downloadPage = new DownloadPage(page);
        await downloadPage.goTo();
        await use(downloadPage);
    },
});

export { expect } from '@playwright/test';