import { test } from '@playwright/test';

test("Verify Bài học 2: Product page", async({page}) =>{
    await test.step("Open Material Playwrightvn page", async() =>{
        await page.goto("https://material.playwrightvn.com/");
    })

    await test.step("Go to Product page", async() =>{
        await page.locator("//a[@href='02-xpath-product-page.html']").click();
    })

    await test.step("Add product 1 twice to the cart", async() =>{
        /*for(let i = 1; i <= 2; i++){
            await page.locator("//button[@data-product-id='1']").click();
        }*/
       await page.locator("//button[@data-product-id='1']").dblclick();
    })

    await test.step("Add product 2 to the cart three times.", async() =>{
        for(let i = 1; i <= 3; i++){
            await page.locator("//button[@data-product-id='2']").click();
        };
    })

    await test.step("add product 3 to the cart", async() =>{
        await page.locator("//button[@data-product-id='3']").click();
    })
})