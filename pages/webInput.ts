import { Page } from "@playwright/test";

export class InputPage {
  constructor(readonly page: Page) {}

  async navigate() {
    await this.page.goto("https://practice.expandtesting.com/");
    await this.page.getByRole("link", { name: "Web inputs" }).click();
    await this.page.goto("https://practice.expandtesting.com/inputs");
  }

  async fillNumber(value: string) {
    await this.page.getByLabel("Input: Number").click();
    //*[@id="input-number"]
    await this.page.fill('//*[@id="input-number"]', value);
  }

  async fillText(value: string) {
    await this.page.fill('//*[@id="input-text"]', value);
  }

  async fillPassword(value: string) {
    await this.page.fill('//*[@id="input-password"]', value);
  }

  async fillDate(value: string) {
    await this.page.fill('//*[@id="input-date"]', value);
  }

  async displayInputs() {
    await this.page.click('button:has-text("Display Inputs")');
    await this.page.waitForTimeout(3000);
  }

  async clearInputs() {
    await this.page.click('button:has-text("Clear Inputs")');
    await this.page.waitForTimeout(3000);
  }
}

// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://practice.expandtesting.com/');
//   await page.getByRole('link', { name: 'Web inputs' }).click();
//   await page.getByLabel('Input: Number').click();
//   await page.getByLabel('Input: Text').click();
//   await page.getByLabel('Input: Text').fill('s');
//   await page.getByLabel('Input: Password').click();
//   await page.getByLabel('Input: Password').fill('ae');
//   await page.getByLabel('Input: Date').fill('2024-08-04');
//   await page.getByRole('button', { name: 'Display Inputs' }).click();
//   await page.getByRole('button', { name: 'Clear Inputs' }).click();
// });
