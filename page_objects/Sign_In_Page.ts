import { expect, Locator, Page } from "@playwright/test";

export class SignInPage {
    readonly page: Page
    readonly cnc_username: Locator
    readonly cnc_password: Locator
    readonly submit_btn: Locator
    readonly user_label: Locator

    constructor(page: Page) {
        this.page = page
        this.cnc_username = page.locator('//input[@id="j_username"]')
        this.cnc_password = page.locator('//input[@id="j_password"]')
        this.submit_btn = page.locator('//input[@id="authenticationform-submit"]')
        this.user_label = page.locator('//li[@class="headerUserReginfo"]')
    }

    //  Methods to use 
    async loginwithCNCuser(username: string, password: string) {
        await this.cnc_username.type(username)
        await this.cnc_password.type(password)
        await this.submit_btn.click()
    }
    async assertionLoginuser() {
        const userlabel = await this.user_label.textContent()
        await expect(userlabel).toEqual('test 41')
    }

}