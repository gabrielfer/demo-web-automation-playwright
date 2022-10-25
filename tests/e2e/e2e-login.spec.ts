import { test, expect } from '@playwright/test';
import { BurgerMenu } from '../../page-objects/components/BurgerMenu';
import { LoginPage } from '../../page-objects/LoginPage';

test.describe.parallel('Login / Logout flow', () => {
  let loginPage: LoginPage;
  let burgerMenu: BurgerMenu;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    burgerMenu = new BurgerMenu(page);
    await page.goto('/');
  });

  test('Negative scenario for Login', async ({ page }) => {
    await loginPage.login('invalid username', 'invalid password');
    await loginPage.assertLoginErrorMessage();
  });

  test('Positive scenario for Login and Logout', async ({ page }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await burgerMenu.logout();
    await expect(page).toHaveURL('https://www.saucedemo.com/');
  });
});
