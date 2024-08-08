import { Page } from '@playwright/test';

export class DynamicTablePage {
  constructor(readonly page: Page) {}

  async goTo() {
    await this.page.goto('https://practice.expandtesting.com/dynamic-table');
  }

  async getChromeCpuLoad(): Promise<string> {
    const cpuLoad = await this.page.textContent('table tbody tr:has(td:text("Chrome")) td:nth-child(2)');
    return cpuLoad?.trim() || '';
  }

  async getChromeCpuLabel(): Promise<string> {
    const cpuLabel = await this.page.textContent('#chrome-cpu');
    return cpuLabel?.trim().replace('Chrome CPU: ', '') || '';
  }
}































// import { Page } from '@playwright/test';

// export class DynamicTablePage {
//   readonly page: Page;
//   readonly cpuLabelSelector: string;
//   readonly tableSelector: string;

//   constructor(page: Page) {
//     this.page = page;
//     this.cpuLabelSelector = 'div[role="alert"]';
//     this.tableSelector = 'div[role="table"] div[role="rowgroup"]';
//   }

//   async goto() {
//     await this.page.goto("https://practice.expandtesting.com/dynamic-table");
//     await this.page.waitForLoadState('networkidle'); // Ensure network is idle
//   }

//   async getChromeCPUFromTable(): Promise<string> {
//     try {
//       console.log('Waiting for table selector to be visible...');
//       await this.page.waitForSelector(this.tableSelector, { timeout: 30000 });
//       console.log('Table selector is now visible.');

//       const rows = await this.page.$$(this.tableSelector + ' div[role="row"]');
//       if (rows.length === 0) {
//         throw new Error('No rows found in the table');
//       }

//       console.log(`Total rows found: ${rows.length}`); // Debugging log

//       for (const row of rows) {
//         const cells = await row.$$('div[role="cell"]');
//         if (cells.length === 0) {
//           console.log('Skipping empty row'); // Debugging log
//           continue;
//         }

//         const name = await cells[0].innerText();
//         console.log(`Row Name: ${name}`); // Debugging log

//         if (name.includes('Chrome')) {
//           const cpuValue = (await cells[3].innerText()).trim();
//           console.log(`Chrome CPU Value from Table: ${cpuValue}`); // Debugging log
//           return cpuValue;
//         }
//       }

//       throw new Error('Chrome row not found in the table');
//     } catch (error) {
//       console.error('Error in getChromeCPUFromTable:', error);
//       throw error;
//     }
//   }

//   async getChromeCPUFromLabel(): Promise<string> {
//     try {
//       console.log('Waiting for label selector to be visible...');
//       await this.page.waitForSelector(this.cpuLabelSelector, { timeout: 30000 });
//       console.log('Label selector is now visible.');

//       const labelText = await this.page.innerText(this.cpuLabelSelector);
//       console.log('Chrome CPU Label Text:', labelText); // Debugging log

//       const match = labelText.match(/Chrome CPU: (\d+(\.\d+)?%)/);
//       if (match) {
//         return match[1];
//       }

//       throw new Error('Chrome CPU value not found in label');
//     } catch (error) {
//       console.error('Error in getChromeCPUFromLabel:', error);
//       throw error;
//     }
//   }
// }

