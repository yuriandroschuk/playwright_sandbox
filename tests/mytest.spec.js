import { test, expect } from '@playwright/test';

test('Testing google', async ({ page }) => {
  await page.goto('https://www.google.com/');
//   await page.pause()
  await page.locator('[name=q]').click()
  await page.locator('[name=q]').fill('this is a test')
  await page.locator('[name=q]').press('Enter')
  
  //Here we're typing instead of filling (fun!)
  await page.locator('[name=q]').type('NOOOOOOOOO THIS IS THE TEST')

if (await page.getByText('Увійти').isDisabled()) {
    await page.getByRole('link', { name: 'Google' }).click()
}
else {
    await page.getByText('Увійти').click()
  }
  await expect(page).toHaveURL(/accounts.google.com/)
});