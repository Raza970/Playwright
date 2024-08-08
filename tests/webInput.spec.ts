import { test } from "../fixtures/webInput.fixture";


test.describe("Web Inputs Page", () => {
  test("should fill all inputs and display values", async ({ inputPage }) => {
    await inputPage.fillNumber("12345");
    await inputPage.fillText("Sample Text");
    await inputPage.fillPassword("password123");
    await inputPage.fillDate("2024-12-25");
    await inputPage.displayInputs();

   
  });

  test.only("should clear all inputs", async ({ inputPage }) => {
    await inputPage.fillNumber("12345");
    await inputPage.fillText("Sample Text");
    await inputPage.fillPassword("password123");
    await inputPage.fillDate("2024-12-25");
    await inputPage.clearInputs();

  });
});
