let fs = require("fs");
require("chromedriver");
let swd = require("selenium-webdriver");
let bldr = new swd.Builder();
let driver = bldr.forBrowser("chrome").build();

let cFile = process.argv[2];
let uToAdd = process.argv[3];

(async function () {
    try {
        //selenium function to wait to load css and page
        await driver.manage().setTimeouts({ implicit: 20000, pageLoad: 20000 });

        let data = await fs.promises.readFile(cFile);
        let { url, pwd, user } = JSON.parse(data);
        await driver.get(url);
        let unInputWillBeFoundPromise = driver.findElement(swd.By.css("#input-1"));
        let psInputWillBeFoundPromise = driver.findElement(swd.By.css("#input-2"));
        let unNpsEl = await Promise.all([unInputWillBeFoundPromise, psInputWillBeFoundPromise]);
        let uNameWillBeSendPromise = unNpsEl[0].sendKeys(user);
        let pWillBeSendPromise = unNpsEl[1].sendKeys(pwd);
        await Promise.all([uNameWillBeSendPromise, pWillBeSendPromise]);
        let loginBtn = await driver.findElement(swd.By.css("button[data-analytics=LoginPassword]"));
        await loginBtn.click();
        // console.log("We haveLogged In");
        let adminLinkAnchor = await driver.findElement(swd.By.css("a[data-analytics=NavBarProfileDropDownAdministration]"))
        let adminPageUrl = await adminLinkAnchor.getAttribute("href");
        console.log(adminPageUrl);
        await driver.get(adminPageUrl);
        let manageTabs = await driver.findElements(swd.By.css(".administration header ul li"));
        await manageTabs[1].click(); //2nd element clicks


    }

    catch (err) {
        console.log(err);
    }

})();