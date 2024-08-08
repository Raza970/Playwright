import { Page } from '@playwright/test';

export class RadioButtonPage {
  constructor(private page: Page) {}

  async goTo() {
    await this.page.goto('https://practice.expandtesting.com/radio-buttons'); // Replace with your page URL
  }

  async selectColor(color: string) {
    await this.page.click(`input[name="color"][value="${color}"]`);
  }

  async selectSport(sport: string) {
    await this.page.click(`input[name="sport"][value="${sport}"]`);
  }

  async getSelectedColor(): Promise<string> {
    const selectedColor = await this.page.$eval('input[name="color"]:checked', el => (el as HTMLInputElement).value);
    return selectedColor;
  }

  async getSelectedSport(): Promise<string> {
    const selectedSport = await this.page.$eval('input[name="sport"]:checked', el => (el as HTMLInputElement).value);
    return selectedSport;
  }
}



































// import { Page } from '@playwright/test';

// export class RadioButtonsPage {
//   readonly page: Page;
//   readonly favoriteColorSelector: string = 'input[name="color"]';
//   readonly favoriteSportSelector: string = 'input[name="sport"]';

//   constructor(page: Page) {
//     this.page = page;
//   }

//   async goto() {
//     console.log('Navigating to radio buttons page...');
//     await this.page.goto('https://practice.expandtesting.com/radio-buttons');
//     console.log('Navigation complete.');
//   }

//   async selectFavoriteColor(color: string) {
//     console.log(`Selecting favorite color: ${color}`);
//     await this.page.check(`input[name="color"][value="${color}"]`);
//     console.log(`Favorite color ${color} selected.`);
//   }

//   async selectFavoriteSport(sport: string) {
//     console.log(`Selecting favorite sport: ${sport}`);
//     await this.page.check(`input[name="sport"][value="${sport}"]`);
//     console.log(`Favorite sport ${sport} selected.`);
//   }

//   async isColorSelected(color: string) {
//     const isChecked = await this.page.isChecked(`input[name="color"][value="${color}"]`);
//     console.log(`Is color ${color} selected: ${isChecked}`);
//     return isChecked;
//   }

//   async isSportSelected(sport: string) {
//     const isChecked = await this.page.isChecked(`input[name="sport"][value="${sport}"]`);
//     console.log(`Is sport ${sport} selected: ${isChecked}`);
//     return isChecked;
//   }
// }