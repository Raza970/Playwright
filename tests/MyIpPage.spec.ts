import { expect, test } from "../fixtures/MyIp.Fixture";

test.describe('My IP Information Page', () => {
    test('should display correct IP and location information', async ({ myIPPage }) => {
        const ipv4 = await myIPPage.getIPv4();
        const ipv6 = await myIPPage.getIPv6();
        const country = await myIPPage.getCountry();
        const city = await myIPPage.getCity();
        const timezone = await myIPPage.getTimezone();

        expect(ipv4).toContain('IPv4: 39.51.46.1');
        expect(ipv6).toContain('IPv6: Not Detected');
        expect(country).toContain('Country: Pakistan');
        expect(city).toContain('City: Karachi');
        expect(timezone).toContain('TimeZone: Asia/Karachi');
    });
});




























// test.describe('My IP Information Page', () => {
//   test.beforeEach(async ({ myIPPage }) => {
//     await myIPPage.navigate();
//   });

//   test('should display the correct IPv4 address', async ({ myIPPage }) => {
//     const ipv4 = await myIPPage.getIPv4();
//     expect(ipv4).toBe('IPv4: 39.51.46.1');
//   });

//   test('should display the correct IPv6 address', async ({ myIPPage }) => {
//     const ipv6 = await myIPPage.getIPv6();
//     expect(ipv6).toBe('IPv6: Not Detected');
//   });

//   test('should display the correct country', async ({ myIPPage }) => {
//     const country = await myIPPage.getCountry();
//     expect(country).toBe('Country: Pakistan');
//   });

//   test('should display the correct city', async ({ myIPPage }) => {
//     const city = await myIPPage.getCity();
//     expect(city).toBe('City: Karachi');
//   });

//   test('should display the correct timezone', async ({ myIPPage }) => {
//     const timezone = await myIPPage.getTimeZone();
//     expect(timezone).toBe('TimeZone: Asia/Karachi');
//   });
// });