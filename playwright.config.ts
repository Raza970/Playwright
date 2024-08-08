import { defineConfig, devices } from "@playwright/test";
// // import { dot } from "node:test/reporters";

// import { PlaywrightTestConfig, devices } from "@playwright/test";

// const config: PlaywrightTestConfig = {
//   testDir: "./tests",
//   timeout: 45 * 1000,
//   expect: {
//     timeout: 45 * 1000,
//   },
//   fullyParallel: false,
//   forbidOnly: !!process.env.CI,
//   retries: process.env.CI ? 1 : 0,
//   workers: process.env.CI ? 1 : undefined,
//   reporter: [
//     ["junit", { outputFile: "test-results/e2e-junit-results.xml" }],
  
//     ["html", { outputFile: "playwright-report" }],
//   ],
//   use: {
//     screenshot: "on",
//     actionTimeout: 0,
//     trace: "on",
//     video: "on",
//     launchOptions: {
//       slowMo: 500,
//     },
//   },
//   projects: [
//     // {
//     //   name: 'chromium',
//     //   use: { ...devices['Desktop Chrome'], viewport: { width: 1920, height: 1080 } }
//     // },
//     {
//       name: "chromiumSmall",
//       use: {
//         ...devices["Desktop Chrome"],
//         viewport: { width: 1620, height: 780 },
//       },
//     },
//   ],
// };

// export default config;

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ["dot"],
    [
      "json",
      {
        outputFile: "test-results.json",
      },
    ],
    [
      "html",
      {
        open: "never",
      },
    ],
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',
    headless: false,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    // video:""

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

  //   {
  //     name: 'firefox',
  //     use: { ...devices['Desktop Firefox'] },
  //   },

  //   {
  //     name: 'webkit',
  //     use: { ...devices['Desktop Safari'] },
  //   },

  /* Test against mobile viewports. */
  // {
  //   name: 'Mobile Chrome',
  //   use: { ...devices['Pixel 5'] },
  // },
  // {
  //   name: 'Mobile Safari',
  //   use: { ...devices['iPhone 12'] },
  // },

  /* Test against branded browsers. */
  // {
  //   name: 'Microsoft Edge',
  //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
  // },
  // {
  //   name: 'Google Chrome',
  //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
  // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
