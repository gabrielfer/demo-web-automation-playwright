import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {

    readonly page: Page
    readonly usernameField: Locator
    readonly passwordField: Locator
    readonly loginButton: Locator
    readonly loginErrorMessage: Locator
    readonly botForm: Locator

    constructor(page: Page) {
        this.page = page
        this.usernameField = page.locator('#user-name')
        this.passwordField = page.locator('#password')
        this.loginButton = page.locator('#login-button')
        this.loginErrorMessage = page.locator('.error-message-container > h3')
        this.botForm = page.locator('.bot_column')
    }

    async visit() {
        await this.page.goto('https://www.saucedemo.com/')
    }

    async login(username: string, password: string) {
        await this.usernameField.type(username)
        await this.passwordField.type(password)
        await this.loginButton.click()
    }

    async assertLoginErrorMessage() {
        await expect(this.loginErrorMessage).toContainText('Epic sadface: Username and password do not match any user in this service');
    }

    async snapshoptLoginForm() {
        expect(await this.botForm.screenshot()).toMatchSnapshot('home-page-bot-form.png')
    }

    async snapshotLoginErrorMessage() {
        expect(await this.loginErrorMessage.screenshot()).toMatchSnapshot('login-error-message.png')
    }

}