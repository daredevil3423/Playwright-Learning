import{test,expect}from '@playwright/test'

test.describe("feedback Form",()=>{
    test.beforeEach(async({page})=>{
        await page.goto('http://zero.webappsecurity.com/index.html')
        await page.click('#feedback')
       
    })
    // Reset feedback Form
    test('Reset feedback Form', async({page})=>{
        await page.type('#name','david')
        await page.type('#email','david@gmail.com')
        await page.type('#subject','offer-letter')
        await page.type('#comment','thankful to your organisation')
        await page.click("input[name='clear']")


       const nameInput=await page.locator('#name')
        const commentInput=await page.locator('#comment')
        await expect(nameInput).toBeEmpty()
        await expect(commentInput).toBeEmpty()

    })

    //submit feedback form
    test("Submit the feedback form", async({page})=>{
        await page.type('#name','david')
        await page.type('#email','david@gmail.com')
        await page.type('#subject','offer-letter')
        await page.type('#comment','thankful to your organisation')
        await page.click("input[type='submit']")

        await page.waitForSelector('#feedback-title')



    })
    
})