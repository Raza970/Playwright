import { Page } from '@playwright/test';

export class DragAndDropPage {
  constructor(readonly page: Page) {}

  async goTo() {
    await this.page.goto('https://practice.expandtesting.com/drag-and-drop');
  }

  async dragAndDrop(source: string, target: string) {
    const sourceElement = await this.page.$(source);
    const targetElement = await this.page.$(target);

    if (sourceElement && targetElement) {
      const sourceBox = await sourceElement.boundingBox();
      const targetBox = await targetElement.boundingBox();

      if (sourceBox && targetBox) {
        await this.page.mouse.move(sourceBox.x + sourceBox.width / 2, sourceBox.y + sourceBox.height / 2);
        await this.page.mouse.down();
        await this.page.mouse.move(targetBox.x + targetBox.width / 2, targetBox.y + targetBox.height / 2);
        await this.page.mouse.up();
      }
    }
  }

  

  // async getColumnText(columnId: string): Promise<string> {
  //   const columnText = await this.page.textContent(`${columnId} header`);
  //   return columnText?.trim() || '';
  // }
}