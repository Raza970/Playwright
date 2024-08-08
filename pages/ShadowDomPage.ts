import { Page } from '@playwright/test';

export class ShadowDomPage {
  constructor(private page: Page) {}

  // Method to get the shadow root element
  private async getShadowRoot() {
    const shadowHost = await this.page.locator('#shadow-host');
    const shadowRootHandle = await shadowHost.evaluateHandle(el => el.shadowRoot);
    if (!shadowRootHandle) {
      throw new Error('Shadow root not found');
    }
    return shadowRootHandle.asElement();
  }

  // Method to click a button inside the shadow DOM
  async clickShadowButton() {
    const shadowRoot = await this.getShadowRoot();
    if (shadowRoot) {
      await shadowRoot.evaluate((root: ShadowRoot) => {
        const button = root.querySelector('#my-btn');
        if (button) (button as HTMLButtonElement).click();
      });
    }
  }

  // Method to get text from a button inside the shadow DOM
  async getShadowButtonText() {
    const shadowRoot = await this.getShadowRoot();
    if (shadowRoot) {
      return shadowRoot.evaluate((root: ShadowRoot) => {
        const button = root.querySelector('#my-btn');
        return button ? (button as HTMLButtonElement).textContent : '';
      });
    }
    return '';
  }
}