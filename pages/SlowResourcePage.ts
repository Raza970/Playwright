import { Page } from '@playwright/test';

export class SlowResourcesPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://practice.expandtesting.com/slow');
    }

    async waitForSpinnerToDisappear() {
        await this.page.waitForSelector('.spinner-border', { state: 'hidden' });
    }

    async getProgressMessage() {
        return await this.page.textContent('#progress-message');
    }
}