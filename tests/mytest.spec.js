import { test, expect } from '@playwright/test';

test('Testing google', async ({ page }) => {
  await page.goto('https://playwright.dev/');
//   await page.pause()
  await page.locator('[class=getStarted_Sjon]').click()
  await page.getByRole('button', { name: 'Search' }).click()
  await page.locator('[class=DocSearch--active]').type('locators')
  await page.getByRole('option', { name: 'Locators', exact: true }).getByRole('link', { name: 'Locators' }).click()
  await expect(page).toHaveURL(/locators/)
//   await page.pause()
  if(page.getByRole('button', { name: 'Switch between dark and light mode (currently dark mode)' })){
    page.getByRole('button', { name: 'Switch between dark and light mode (currently dark mode)' }).click
  }
  else(page.getByRole('button', { name: 'Switch between dark and light mode (currently light mode)' }).click())
});