import { test as base } from '@playwright/test';
import { ShadowDomPage } from '../pages/ShadowDomPage';


export const test = base.extend<{ shadowDomPage: ShadowDomPage }>({
  shadowDomPage: async ({ page }, use) => {
    const shadowDomPage = new ShadowDomPage(page);
    await use(shadowDomPage);
  },
});