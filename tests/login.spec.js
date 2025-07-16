import {test,expect} from '@playwright/test'
test('login to the application',async ({page})=>{

await page.goto("https://rahulshettyacademy.com/angularpractice/")
await expect(page).toHaveTitle('ProtoCommerce')


})

test('failed test login',async({page})=>{


    await page.goto("https://rahulshettyacademy.com/angularpractice/")
await expect(page).toHaveTitle('ProtoCommerce1')
})

