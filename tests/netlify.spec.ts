import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://netlify.arkaron.de/');
  await page.getByRole('link', { name: 'Selector' }).click();
  await page.getByRole('link', { name: 'Back' }).click();
  await expect(page.getByRole('link', { name: 'Selector' })).toBeVisible();
});