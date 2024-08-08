import { expect, test } from "../fixtures/SlowResource.Fixture";

test.describe('Slow Resources Page', () => {
    test('should display progress message after the spinner disappears', async ({ slowResourcesPage }) => {
        await slowResourcesPage.waitForSpinnerToDisappear();
        const progressMessage = await slowResourcesPage.getProgressMessage();

      
        expect(progressMessage).toContain('Expected Progress Message');
    });
});