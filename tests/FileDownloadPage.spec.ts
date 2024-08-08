const { chromium } = require('playwright');

(async () => {
  // Launch the browser
  const browser = await chromium.launch({ headless: false }); // Optional: Set headless to false for debugging
  const context = await browser.newContext({
    // Enable the download behavior in the context
    acceptDownloads: true
  });
  const page = await context.newPage();

  try {
    // Go to the file downloader page
    await page.goto('https://practice.expandtesting.com/download');

    // Array to store download promises
    const downloadPromises:any[] = [];

    // Get all download links
    const downloadLinks = await page.$$('a[data-testid]');

    for (const link of downloadLinks) {
      // Wait for download and get the download object
      const downloadPromise = page.waitForEvent('download');
      await link.click();
      const download = await downloadPromise;

      // Push download promise to the array
      downloadPromises.push(download);
    }

    // Wait for all downloads to complete
    const downloads = await Promise.all(downloadPromises);

    // Save all downloads to disk
    for (const download of downloads) {
      const path = await download.path();
      console.log(`Downloaded file to: ${path}`);
    }
  } catch (error) {
    console.error('Error occurred during download process:', error);
  } finally {
    // Close the browser
    await browser.close();
  }
})();

































// const { chromium } = require('playwright');

// (async () => {
//   // Launch the browser
//   const browser = await chromium.launch();
//   const context = await browser.newContext({
//     // Enable the download behavior in the context
//     acceptDownloads: true
//   });
//   const page = await context.newPage();

//   // Go to the file downloader page
//   await page.goto('https://practice.expandtesting.com/download');

//   // Array to store download promises
//   const downloadPromises:any[] = [];

//   // Get all download links
//   const downloadLinks = await page.$$('a[data-testid]');

//   for (const link of downloadLinks) {
//     // Wait for download and get the download object
//     const [download] = await Promise.all([
//       page.waitForEvent('download'),
//       link.click(),
//     ]);

//     // Push download promise to the array
//     downloadPromises.push(download);
//   }

//   // Wait for all downloads to complete
//   const downloads = await Promise.all(downloadPromises);

//   // Save all downloads to disk
//   for (const download of downloads) {
//     const path = await download.path();
//     console.log(`Downloaded file to: ${path}`);
//   }

//   // Close the browser
//   await browser.close();
// })();