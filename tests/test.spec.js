// @ts-check
const { test, expect } = require('@playwright/test');

test('Homepage has playwright in title and get started link linking to the intro page', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  // create a locator
  const getStarted = page.getByText('Get Started Test');

  // Click the get started link.
  await getStarted.click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});
