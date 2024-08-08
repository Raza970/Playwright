import { expect, test } from "../fixtures/Dynamic.fixture";
test.describe('Dynamic Table Page Tests', () => {
  test.beforeEach(async ({ dynamicTablePage }) => {
    await dynamicTablePage.goTo();
  });

  test('should get Chrome CPU load from table and compare with label', async ({ dynamicTablePage }) => {
    const chromeCpuLoad = await dynamicTablePage.getChromeCpuLoad();
    const chromeCpuLabel = await dynamicTablePage.getChromeCpuLabel();
    expect(chromeCpuLoad).toBe(chromeCpuLabel);
  });
});



























// import { expect } from "@playwright/test";
// import { test } from "../fixtures/Dynamic.fixture";


// test.describe("Dynamic Table Tests", () => {
//   test.beforeEach(async ({ dynamicTablePage }) => {
//     await dynamicTablePage.goto();
//   });

//   test("should compare Chrome CPU value from table with the yellow label", async ({
//     dynamicTablePage,
//   }) => {
//     const tableCPU = await dynamicTablePage.getChromeCPUFromTable();
//     const labelCPU = await dynamicTablePage.getChromeCPUFromLabel();
//     expect(tableCPU).toBe(labelCPU);
//   });
// });
