async function getExmaple(){
    return "abc";
}


import { test} from '@playwright/test';
test('user say hello', async ({ page})=>{
            let t=  await page.goto("https://playwright.dev/");
            let c = await getExmaple();
});