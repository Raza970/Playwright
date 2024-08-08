import { Page } from '@playwright/test';

export class TyposPage {
  constructor(readonly page: Page) {}

  async goTo() {
    await this.page.goto('https://practice.expandtesting.com/typos', { waitUntil: 'load', timeout: 60000 }); // Replace with your page URL
  }

  async getPageTitle(): Promise<string> {
    await this.page.waitForSelector('h1.page-title', { timeout: 10000 });
    const title = await this.page.textContent('h1.page-title');
    if (title === null) {
      throw new Error('Page title not found');
    }
    return title;
  }

  async getParagraphText(): Promise<string> {
    await this.page.waitForSelector('div.row > div > p:nth-of-type(2)', { timeout: 10000 });
    const paragraphText = await this.page.textContent('div.row > div > p:nth-of-type(2)');
    if (paragraphText === null) {
      throw new Error('Paragraph text not found');
    }
    return paragraphText;
  }

  async checkForTypos(): Promise<boolean> {
    const paragraphText = await this.getParagraphText();
    // Example typo check: looking for ', other times you won,t.' instead of ', other times you won't.'
    return paragraphText.includes(', other times you won,t.');
  }
}

















// import { Page } from '@playwright/test';

// export class TyposPage {
//   constructor(readonly page: Page) {}

//   async goTo() {
//     await this.page.goto('https://practice.expandtesting.com/typos'); // Replace with your page URL
//   }

//   async getPageTitle(): Promise<string> {
//     const title = await this.page.textContent('h1.page-title');
//     if (title === null) {
//       throw new Error('Page title not found');
//     }
//     return title;
//   }

//   async getParagraphText(): Promise<string> {
//     const paragraphText = await this.page.textContent('div.row > div > p:nth-of-type(2)');
//     if (paragraphText === null) {
//       throw new Error('Paragraph text not found');
//     }
//     return paragraphText;
//   }

//   async checkForTypos(): Promise<boolean> {
//     const paragraphText = await this.getParagraphText();
//     // Example typo check: looking for ', other times you won,t.' instead of ', other times you won't.'
//     return paragraphText.includes(', other times you won,t.');
//   }
// }