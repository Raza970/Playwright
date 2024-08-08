import { Page } from '@playwright/test';

export class FileUploaderPage {
  constructor(private page: Page) {}

  async goTo() {
    await this.page.goto('https://practice.expandtesting.com/upload'); 
  }

  async uploadFile(filePath: string) {
    await this.page.setInputFiles('input[data-testid="file-input"]', filePath);
    await this.page.click('button[data-testid="file-submit"]');
  }

  async getFlashMessage(): Promise<string> {
    const flashMessage = await this.page.textContent('#flashMessage');
    return flashMessage?.trim() || '';
  }
}























// import { Page } from '@playwright/test';

// export class FileUploaderPage {
//   constructor(private page: Page) {}

//   async goTo() {
//     await this.page.goto('https://practice.expandtesting.com/upload'); 
//   }

//   async uploadFile(filePath: string) {
//     await this.page.setInputFiles('input[data-testid="file-input"]', filePath);
//     await this.page.click('button[data-testid="file-submit"]');
//   }

//   async getFlashMessage(): Promise<string> {
//     const flashMessage = await this.page.textContent('#flashMessage');
//     return flashMessage?.trim() || '';
//   }
// }