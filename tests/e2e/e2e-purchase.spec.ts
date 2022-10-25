import { test } from '@playwright/test';
import { LoginPage } from '../../page-objects/LoginPage';
import { HomePage } from '../../page-objects/HomePage';
import { Product } from '../../page-objects/components/Product';
import { BurgerMenu } from '../../page-objects/components/BurgerMenu';
import { ShoppingCartPage } from '../../page-objects/ShoppingCartPage';
import { CheckoutPage } from '../../page-objects/CheckoutPage';

test.describe.parallel('Login / Logout flow', () => {
  let loginPage: LoginPage;
  let homePage: HomePage;
  let product: Product;
  let burgerMenu: BurgerMenu;
  let shoppingCartPage: ShoppingCartPage;
  let checkoutPage: CheckoutPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    product = new Product(page);
    burgerMenu = new BurgerMenu(page);
    shoppingCartPage = new ShoppingCartPage(page);
    checkoutPage = new CheckoutPage(page);
    await page.goto('/');
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('Purchase a specific item', async () => {
    await homePage.clickProductByName('Sauce Labs Backpack');
    await product.isProductPageLoaded('Sauce Labs Backpack');
    await product.clickAddToCart();
    await burgerMenu.clickShopCartLink();
    await shoppingCartPage.clickCheckoutButton();
    await checkoutPage.fillFirstName('Gabriel');
    await checkoutPage.fillLasNameField('Silva');
    await checkoutPage.fillZipCodePostalField('99999999');
    await checkoutPage.clickContinueButton();
    await checkoutPage.clickFinishButton();
    await checkoutPage.assertSuccessOrderMessage();
  });
});
