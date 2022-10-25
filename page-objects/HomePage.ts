import { Locator, Page } from '@playwright/test';
import { BurgerMenu } from './components/BurgerMenu';

export class HomePage {
  readonly page: Page;
  readonly shoppingCartLink: Locator;
  readonly inventoryList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.shoppingCartLink = page.locator('.shopping_cart_link');
    this.inventoryList = page.locator('.inventory_list');
  }

  async clickShoppiongCart() {
    await this.shoppingCartLink.click();
  }

  async clickProductByName(productName: string) {
    await this.page.locator('text=' + productName + '').click();
  }
}
