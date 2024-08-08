import { Page } from '@playwright/test';

export class FormValidationPage {
  constructor(private page: Page) {}

  async goTo() {
    await this.page.goto('https://practice.expandtesting.com/form-validation'); // Replace with your page URL
  }

  async fillForm(contactName: string, contactNumber: string, pickupDate: string, paymentMethod: string) {
    await this.page.fill('#validationCustom01', contactName);
    await this.page.fill('#validationCustom05', contactNumber);
    await this.page.fill('#validationCustom05', pickupDate);
    await this.page.selectOption('#validationCustom04', paymentMethod);
  }

  async submitForm() {
    await this.page.click('button[type="submit"]');
  }

  async getValidationMessage(fieldId: string): Promise<string> {
    const validationMessage = await this.page.textContent(`${fieldId} ~ .invalid-feedback`);
    return validationMessage?.trim() || '';
  }

  async getFieldValue(fieldId: string): Promise<string> {
    const fieldValue = await this.page.inputValue(fieldId);
    return fieldValue?.trim() || '';
  }
}