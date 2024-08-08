import { Page } from '@playwright/test';

export class ForgotPasswordPage {
  constructor(private page: Page) {}

  async goTo() {
    await this.page.goto('https://practice.expandtesting.com/forgot-password');
  }

  async fillEmail(email: string) {
    await this.page.fill('#email', email);
  }

  async submitForm() {
    await this.page.click('button[type="submit"]');
  }

  async getValidationMessage(): Promise<string> {
    const validationMessage = await this.page.textContent('.invalid-feedback');
    return validationMessage?.trim() || '';
  }
}