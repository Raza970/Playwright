import { expect, test } from "../fixtures/login.Fixture";
import { LoginPage } from "../pages/loginPage";
// import { LoginPage } from "../src/pages/loginpage";
// import test, { expect } from "@playwright/test";
// import { LoginPage } from "../fixtures/login.fixture";
// import { LoginPage } from "../src/fixtures/pom/login.pom";
// import { LoginPage } from "../src/fixtures/pages/loginPage";

// import { LoginPage } from '../pages/login.page';
test.describe("Login functionality", () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test("Successful login", async ({ username, password }) => {
    await loginPage.login(username, password);
    await expect(loginPage.isWelcomeMessageVisible()).resolves.toBeTruthy();
  });

  test.only("Login with incorrect credentials", async ({ page }) => {
    await loginPage.login("wrongUsername", "wrongPas");
    const errorMessage = page.locator("text=your username is invalid!");
    await expect(errorMessage).toBeVisible();
  });
});
