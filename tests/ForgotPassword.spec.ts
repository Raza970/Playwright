import { expect, test } from "../fixtures/ForgotPaaword.Fixture";

test.describe('Forgot Password Tests', () => {
  test('should show validation message for empty email', async ({ forgotPasswordPage }) => {
    // Navigate to the forgot password page
    await forgotPasswordPage.goTo();

    // Submit the form without filling the email
    await forgotPasswordPage.submitForm();

    // Assert that the validation message is shown
    const validationMessage = await forgotPasswordPage.getValidationMessage();
    expect(validationMessage).toBe('Please enter a valid email address.');
  });

  test('should submit the form with a valid email', async ({ forgotPasswordPage }) => {
    // Navigate to the forgot password page
    await forgotPasswordPage.goTo();

    // Fill the email field
    const validEmail = 'test@example.com';
    await forgotPasswordPage.fillEmail(validEmail);

    // Submit the form
    await forgotPasswordPage.submitForm();

    // Assert no validation message (assuming success message or redirection is handled elsewhere)
    // const validationMessage = await forgotPasswordPage.getValidationMessage();
    // expect(validationMessage).toBe('');
  });
});