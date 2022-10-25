import { Locator, Page } from '@playwright/test';

export class ShoppingCartPage {
  readonly page: Page;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkoutButton = page.locator('#checkout');
  }

  async clickCheckoutButton() {
    await this.checkoutButton.click();
  }
}
