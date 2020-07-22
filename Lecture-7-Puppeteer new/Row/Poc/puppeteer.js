let puppeteer = require("puppeteer");
(async function () {
    //browser open => visible
    let browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ["--incognito", "--start-maximized"]
    });
    // try {
        let pages = await browser.pages();
        let page = pages[0];
        await page.goto("https://www.google.com");
        // ,{waitUntil:'networkidle2'}
    // }
    // catch (err) {
        console.log(err);
    // }

})();