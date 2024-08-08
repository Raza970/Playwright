import { Page } from '@playwright/test';

export class DragAndDropCirclesPage {
  constructor(readonly page: Page) {}

  async goTo() {
    await this.page.goto('https://practice.expandtesting.com/drag-and-drop-circles'); 
  }

  async dragCircleToTarget(circleClass: string) {
    const circle = await this.page.$(`.${circleClass}`);
    const target = await this.page.$('#target');

    if (circle && target) {
      const circleBox = await circle.boundingBox();
      const targetBox = await target.boundingBox();

      if (circleBox && targetBox) {
        // Drag circle to the center of the target
        await this.page.mouse.move(circleBox.x + circleBox.width / 2, circleBox.y + circleBox.height / 2);
        await this.page.mouse.down();
        await this.page.mouse.move(targetBox.x + targetBox.width / 2, targetBox.y + targetBox.height / 2);
        await this.page.mouse.up();
      }
    }
  }

  async isCircleInTarget(...circleClasses: string[]): Promise<boolean> {
    for (const circleClass of circleClasses) {
      const circle = await this.page.$(`.${circleClass}`);
      const target = await this.page.$('#target');

      if (circle && target) {
        const circleBox = await circle.boundingBox();
        const targetBox = await target.boundingBox();

        if (circleBox && targetBox) {
          const isInTarget =
            circleBox.x >= targetBox.x &&
            circleBox.y >= targetBox.y &&
            circleBox.x + circleBox.width <= targetBox.x + targetBox.width &&
            circleBox.y + circleBox.height <= targetBox.y + targetBox.height;

          if (!isInTarget) {
            return false;
          }
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
    return true;
  }
}
