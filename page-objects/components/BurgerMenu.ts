import { Locator, Page } from '@playwright/test';

export class BurgerMenu {
    readonly page: Page
    readonly burgerMenuButton: Locator
    readonly logoutSidebarLink: Locator
    readonly shopCartLink: Locator

    constructor(page: Page) {
        this.page = page
        this.burgerMenuButton = page.locator('.bm-burger-button')
        this.logoutSidebarLink = page.locator('#logout_sidebar_link')
        this.shopCartLink = page.locator('.shopping_cart_link')
    }
    
    async logout() {
        await this.burgerMenuButton.click()
        await this.logoutSidebarLink.click()
    }
    
    async clickShopCartLink() {
        await this.shopCartLink.click()
    }
}