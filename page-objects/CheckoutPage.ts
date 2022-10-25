import { Locator, Page, expect } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;
  readonly firstNameField: Locator;
  readonly lastNameField: Locator;
  readonly zipCodePostalField: Locator;
  readonly continueButton: Locator;
  readonly finishButon: Locator;
  readonly completeOrderMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameField = page.locator('#first-name');
    this.lastNameField = page.locator('#last-name');
    this.zipCodePostalField = page.locator('#postal-code');
    this.continueButton = page.locator('#continue');
    this.finishButon = page.locator('#finish');
    this.completeOrderMessage = page.locator('.complete-header');
  }

  async fillFirstName(firstName: string) {
    await this.firstNameField.fill(firstName);
  }

  async fillLasNameField(lastName: string) {
    await this.lastNameField.fill(lastName);
  }

  async fillZipCodePostalField(zipPostalCodePostal: string) {
    await this.zipCodePostalField.fill(zipPostalCodePostal);
  }

  async clickContinueButton() {
    await this.continueButton.click();
  }

  async clickFinishButton() {
    await this.finishButon.click();
  }

  async assertSuccessOrderMessage() {
    await expect(this.completeOrderMessage).toContainText(
      'THANK YOU FOR YOUR ORDER'
    );
  }
}
