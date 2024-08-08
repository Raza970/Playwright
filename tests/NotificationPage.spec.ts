import { expect, test } from "../fixtures/Notification.Fixture";


test.describe('Notification Message Tests', () => {
  test('should load new notification message', async ({ notificationPage }) => {
    // Navigate to the notification message page
    await notificationPage.goTo();

    // Click to load a new message
    await notificationPage.clickLoadNewMessage();

    // Get the notification message
    const message = await notificationPage.getNotificationMessage();

    // Assert the message contains expected text (for example purposes, adjust as needed)
    expect(message).toContain('Action');
  });
});