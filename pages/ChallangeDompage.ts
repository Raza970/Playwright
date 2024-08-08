import { Page } from '@playwright/test';

export class ChallengingDOMPage {
  constructor(readonly page: Page) {}

  async goTo() {
    await this.page.goto('https://practice.expandtesting.com/challenging-dom');
  }

//   async getButtonLabels(): Promise<string[]> {
//     const buttons = await this.page.$$('a.btn');
//     const labels = await Promise.all(buttons.map(button => button.textContent()));
//     return labels.filter((label): label is string => label !== null);
//   }

  async getTableData(row: number, column: number): Promise<string> {
    const cellText = await this.page.textContent(`table.table-bordered tbody tr:nth-child(${row + 1}) td:nth-child(${column + 1})`);
    return cellText ?? ''; // Ensure the result is always a string
  }
  async clickEditButton(row: number) {
    await this.page.click(`table.table-bordered tbody tr:nth-child(${row + 1}) a.btn-primary`);
  }

  async clickDeleteButton(row: number) {
    await this.page.click(`table.table-bordered tbody tr:nth-child(${row + 1}) a.btn-danger`);
  }

  async canvasExists(): Promise<boolean> {
    return await this.page.$('canvas#canvas') !== null;
  }
}