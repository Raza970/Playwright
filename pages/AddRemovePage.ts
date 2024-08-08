import { Page } from '@playwright/test';

export class AddRemoveElementsPage {
  constructor(private page: Page) {}

  async goTo() {
    await this.page.goto('https://practice.expandtesting.com/add-remove-elements');
  }

  async addElement() {
    await this.page.click('button.btn-primary');
  }

  async deleteElement() {
    await this.page.click('#elements button.added-manually');
  }

  async countElements(): Promise<number> {
    const elements = await this.page.$$('#elements button.added-manually');
    return elements.length;
  }
}