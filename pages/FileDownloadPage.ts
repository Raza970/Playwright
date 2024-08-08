import { Page } from '@playwright/test';

export class DownloadPage {
    constructor(readonly page: Page) {}

    async goTo() {
        await this.page.goto('https://practice.expandtesting.com/download');
    }

    async downloadFile(testId: string) {
        const downloadPromise = this.page.waitForEvent('download');
        await this.page.getByTestId(testId).click();
        return await downloadPromise;
    }
}