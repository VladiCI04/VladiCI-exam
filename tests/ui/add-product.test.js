const { test, expect } = require('@playwright/test');

test('Check add products page', async ({ page }) => {
    await page.goto('http://localhost:8080/add-to-shopping-list');
    const form = await page.$('input');
    expect(form).toBeTruthy();
  });
  