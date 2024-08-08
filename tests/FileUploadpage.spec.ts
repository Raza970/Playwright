import { test, expect } from '@playwright/test';
import { FileUploaderPage } from '../pages/FileUploadPage';
import * as path from 'path';

test('File Upload Test', async ({ page }) => {
  const fileUploader = new FileUploaderPage(page);

  
  const filePath = path.resolve(__dirname, 'File', 'large-file.jpeg');
  
  
  await fileUploader.goTo();
  await fileUploader.uploadFile(filePath);

  const flashMessage = await fileUploader.getFlashMessage();
  expect(flashMessage).toContain('successfully uploaded');
});




























// import path from 'path';
// import { expect, test } from '../fixtures/FileUpload.Fixture';

// test.describe('File Uploader Page Tests', () => {
//   test.beforeEach(async ({ fileUploaderPage }) => {
//     await fileUploaderPage.goTo();
//   });

//   test('should upload a valid file', async ({ fileUploaderPage }) => {
//     const filePath = path.resolve(__dirname, 'File/valid-file.jpg'); 
//     await fileUploaderPage.uploadFile(filePath);
//     const message = await fileUploaderPage.getFlashMessage();
//     expect(message).toContain('File uploaded successfully'); 
//   });

//   test.only('should display error message for invalid file size', async ({ fileUploaderPage }) => {
//     const filePath = path.resolve(__dirname, 'File/large-file.jpeg'); 
//     await fileUploaderPage.uploadFile(filePath);
//     const message = await fileUploaderPage.getFlashMessage();
//     expect(message).toContain('File size exceeds the limit');
//   });
// });