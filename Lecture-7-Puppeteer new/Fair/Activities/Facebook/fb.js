let puppeteer = require("puppeteer");
let cFile = process.argv[2];
let fs = require("fs");
let pageName = process.argv[3];
let noOfPosts = process.argv[4];
(async function () {
    try {
        let data = await fs.promises.readFile(cFile);
        let { url, pwd, user } = JSON.parse(data);

        let browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
            args: ["--start-maximized", "--disable-notifications"]
        })

        //tabs
        let tabs = await browser.pages();
        let tab = tabs[0];

        await tab.goto(url, { waitUntil: "networkidle2" });
        await tab.waitForSelector("input[type=email]");
        await tab.type("input[type=email]", user, { delay: 160 });
        await tab.type("input[type=password]", pwd, { delay: 202 });

        await Promise.all([tab.click("#loginbutton"),
        tab.waitForNavigation({ waitUntil: "networkidle2" })]);

        await tab.waitForSelector("._5861 input");
        await tab.type("._5861 input", pageName, { delay: 300 });
        await tab.keyboard.press("Enter");

        await tab.waitForSelector("li[data-edge=keywords_pages]");

        await Promise.all([tab.click("li[data-edge=keywords_pages]"),
        tab.waitForNavigation({ waitUntil: "networkidle2" })]);

        await tab.waitForSelector("._58b7 ._1yt ._401d ._32mo");

        await Promise.all([tab.click("._58b7 ._1yt ._401d ._32mo"),
        tab.waitForNavigation({ waitUntil: "networkidle2" })]);

        // await tab.waitForNavigation({ waitUntil: "networkidle2" });

        await tab.waitForSelector("div[data-key=tab_posts]");

        await Promise.all([tab.click("div[data-key=tab_posts]"),
        tab.waitForNavigation({ waitUntil: "networkidle2" })]);

        //Page is rerouting 2 times so we have to wait 2 times
        await tab.waitForNavigation({ waitUntil: "networkidle2" });
        
        let idx = 0;
        do {
            await tab.waitForSelector("._1xnd .clearfix.uiMorePager");

            let elements = await tab.$$("._1xnd > ._4-u2._4-u8");

            let post = elements[idx];

            //Like and selector is selected inside the post
            await tab.waitForSelector("._666k ._8c74");
            let like = await post.$("._666k ._8c74");
            await like.click({ delay: 800 });

            idx++;

            await tab.waitForSelector(".uiMorePagerLoader", { hidden: true });
            //waits until next posts are loaded otherwise it doesn't waits for it
        }
        while (idx < noOfPosts);

    }
    catch (err) {
        console.log(err);
    }
})();