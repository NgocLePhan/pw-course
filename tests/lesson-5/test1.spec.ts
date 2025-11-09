// Import test
import { test } from '@playwright/test';

test("Verify Bài học 1: Register Page", async ({page}) =>{
    await test.step("Open Material Playwrightvn page", async() =>{
        await page.goto("https://material.playwrightvn.com/");
    })

    await test.step("Navigate to User Registration page", async() =>{
        await page.locator("//a[@href='01-xpath-register-page.html']").click();
    })

    await test.step("Fill all data fields", async() =>{
        //Username field
        await page.locator("//input[@id='username']").fill("Playwright Viet Nam");
        //Email
        await page.locator("//input[@id='email']").fill("playwright@gmail.com");
        //Gender
        await page.locator("//input[@id='female']").check();
        //await page.locator("//input[@id='male']").check();
        //Hobbies
        await page.locator("//input[@id='reading']").setChecked(true);
        await page.locator("//input[@id='traveling']").setChecked(false);
        await page.locator("//input[@id='cooking']").setChecked(true);
        //Interests
        await page.locator("//select[@id='interests']").selectOption({value:"music"});
        //Country
        await page.locator("//select[@id='country']").selectOption({value: "australia"});
        //Date of Birth
        await page.locator("//input[@id='dob']").fill("2025-11-11");
        //Profile Picture
        await page.locator("//input[@id='profile']").setInputFiles("tests/Img/meobeo.jpg");
        //Biography
        await page.locator("//textarea[@id='bio']").fill("PlaywrightVN Là học viện Playwright ở Việt Nam");
        //Rate US
        await page.locator("//input[@id='rating']").fill("9");
        //Favorite Color
        await page.locator("//input[@id='favcolor']").fill("#8d3535");
        //Newsletter
        await page.locator("//div[@class='tooltip']").hover();       
        //Enable Feature
        await page.locator("//span[@class='slider round']").click();
        //Star Rating
        await page.locator("//div[@id='starRating']").click();
    })

    await test.step("Click on Register button", async() =>{
        await page.locator("//button[@type='submit']").click();
    })
})