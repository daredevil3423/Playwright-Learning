// import {test, expect} from '@playwright/test'
import{test,expect}from '@playwright/test'

test.describe("Search Result", ()=> {
    test('Should find search result', async({page})=>{
        await page.goto('http://zero.webappsecurity.com/index.html')
        await page.type('#searchTerm','bank')
        await page.keyboard.press('Enter')

      const numberOfLinks =await page.locator('li >a')
      await expect(numberOfLinks).toHaveCount(4)
    })
   
})