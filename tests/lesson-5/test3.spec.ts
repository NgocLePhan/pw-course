import { test } from '@playwright/test';

test("Verify Bài học 3: Todo page", async({page}) =>{

    await test.step("Go to To do page", async() =>{
        await page.goto("https://material.playwrightvn.com/");
        await page.locator("//a[@href='03-xpath-todo-list.html']").click();
    })

    await test.step("Add 100 todo item", async() =>{
        for(let i = 1; i <= 100; i++){
            await page.locator("//input[@id='new-task']").fill(`Todo ${i}`);
            await page.locator("//button[@id='add-task']").click();
        }
    })

    await test.step("Remove todo that have odd number", async() =>{
        page.on('dialog', async dialog => dialog.accept());

        for(let i = 1; i <= 100; i++){
            if(i % 2 !== 0){
                 await page.locator(`//button[@id='todo-${i}-delete']`).click();
            }
        }
    })
})