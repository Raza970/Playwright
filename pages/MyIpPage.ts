import { Page } from '@playwright/test';

export class MyIPPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://practice.expandtesting.com/my-ip');
    }

    async getIPv4() {
        return await this.page.textContent('#ipv4');
    }

    async getIPv6() {
        return await this.page.textContent('#ipv6');
    }

    async getCountry() {
        return await this.page.textContent('#country');
    }

    async getCity() {
        return await this.page.textContent('#city');
    }

    async getTimezone() {
        return await this.page.textContent('#timezone');
    }
}