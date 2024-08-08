// import { test, expect } from './fixture';

import { expect, test } from "../fixtures/Validation.Fixture";

test.describe('Form Validation Page Tests', () => {
  test.beforeEach(async ({ formValidationPage }) => {
    await formValidationPage.goTo();
  });

  test('should display validation message for empty contact number', async ({ formValidationPage }) => {
    await formValidationPage.fillForm('John Doe', '', '', 'cashondelivery');
    await formValidationPage.submitForm();
    const message = await formValidationPage.getValidationMessage('#validationCustom05');
    expect(message).toBe('Please provide your Contact number.');
  });

  test('should display validation message for empty pickup date', async ({ formValidationPage }) => {
    await formValidationPage.fillForm('John Doe', '012-3456789', '', 'cashondelivery');
    await formValidationPage.submitForm();
    const message = await formValidationPage.getValidationMessage('#validationCustom05');
    expect(message).toBe('Please provide valid Date.');
  });

  test('should display validation message for empty payment method', async ({ formValidationPage }) => {
    await formValidationPage.fillForm('John Doe', '012-3456789', '2024-08-05', '');
    await formValidationPage.submitForm();
    const message = await formValidationPage.getValidationMessage('#validationCustom04');
    expect(message).toBe('Please select the Paymeny Method.');
  });

  test.only('should submit the form successfully with valid inputs', async ({ formValidationPage }) => {
    await formValidationPage.fillForm('John Doe', '012-3456789', '2024-08-05', 'card');
    await formValidationPage.submitForm();
    // Add assertions for successful form submission, e.g., checking URL, success message, etc.
  });
});