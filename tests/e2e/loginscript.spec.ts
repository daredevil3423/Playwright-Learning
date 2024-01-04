import { test, expect } from '@playwright/test'
import { HomePage } from '../../page_objects/home_page'
import { SignInPage } from '../../page_objects/Sign_In_Page'
let homePage: HomePage
    let signInPage: SignInPage

test.describe.parallel('Login / Logout Flow', () => {
    
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        signInPage = new SignInPage(page)
        await homePage.navigateToUrl()
    })
        test('Login with CNC user', async ({ page }) => {
            await signInPage.loginwithCNCuser('test41@gmail.com', 'Test@1234')
            await signInPage.assertionLoginuser()
        })
})