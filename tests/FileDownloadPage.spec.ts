import { expect, test } from "../fixtures/FileDownload.Fixture";


test.describe('Download Files', () => {
    test('should download multiple files', async ({ downloadPage }) => {
        const download1 = await downloadPage.downloadFile('1723123411292_img3.jpg');
        const download2 = await downloadPage.downloadFile('1723128925798_BMJ_SSN_(High)_Edge_2024-08-08-1054.docx');
        const download3 = await downloadPage.downloadFile('1723129651842_package.json');

        // Optionally verify the downloads
        expect(download1.suggestedFilename()).toBe('1723123411292_img3.jpg');
        expect(download2.suggestedFilename()).toBe('BMJ_SSN_(High)_Edge_2024-08-08-1054.docx');
        expect(download3.suggestedFilename()).toBe('package.json');
    });
});





























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