import { expect, Locator, Page } from "@playwright/test";

export class HomePage {
    readonly page: Page
    readonly username: Locator
    readonly password: Locator

    constructor(page: Page) {
        this.page = page
        
    }

//  Methods to use 
async navigateToUrl(){
            await this.page.goto('https://agi-hylt.gcom.grainger.com/en')
            await this.page.waitForTimeout(6000)
        }
}