  import { Page } from '@playwright/test';

  export class LoginPage {
    readonly page: Page;
    readonly usernameInput = 'input[name="username"]';
    readonly passwordInput = 'input[name="password"]';
    readonly loginButton = 'button[type="submit"]';
    readonly welcomeMessage = 'text=You logged into a secure area!';
  //   readonly errorMessage = 'text=Your username is invalid!';

    constructor(page: Page) {
      this.page = page;
    }

    async goto() {
      await this.page.goto('http://practice.expandtesting.com/login');
      // await test.page.getByRole('link', { name: 'Web inputs' }).click();
    }

    async login(username: string, password: string) {
      await this.page.fill(this.usernameInput, username);
      await this.page.fill(this.passwordInput, password);
      await this.page.click(this.loginButton);
    }

    async isWelcomeMessageVisible() {
      return this.page.isVisible(this.welcomeMessage);
    }

  }

