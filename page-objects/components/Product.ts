import { Locator, Page, expect } from '@playwright/test';

export class Product {
    readonly page: Page
    readonly addToCartButton: Locator

    constructor(page: Page) {
        this.page = page
        this.addToCartButton = page.locator('#add-to-cart-sauce-labs-backpack')
    }
    
    async isProductPageLoaded(productName: string) {
        await expect(this.page.locator('text='+ productName +'')).toContainText(productName)
    }

    async clickAddToCart() {
        await this.addToCartButton.click()
    }

}