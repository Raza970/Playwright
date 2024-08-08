import { Page } from '@playwright/test';

export class NotificationPage {
  constructor(private page: Page) {}

  async goTo() {
    await this.page.goto('https://practice.expandtesting.com/notification-message');
  }

  async clickLoadNewMessage() {
    await this.page.click('a[href="/notification-message"]');
  }

  async getNotificationMessage(): Promise<string> {
    const message = await this.page.textContent('div#flash');
    return message?.trim() || '';
  }
}