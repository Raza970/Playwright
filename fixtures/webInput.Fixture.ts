import { test as base } from "@playwright/test";
import { InputPage } from "../pages/webInput";
// import { InputPage } from '../pages/InputPage';

// Extend the base test with the InputPage fixture
type InputPageFixture = {
  inputPage: InputPage;
};

const test = base.extend<InputPageFixture>({
  inputPage: async ({ page }, use) => {
    const inputPage = new InputPage(page);
    await inputPage.navigate();
    await use(inputPage);
  },
});

export { test };
