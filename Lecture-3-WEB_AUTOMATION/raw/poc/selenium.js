// npm init -y
// npm install selenium-webdriver chromedriver
require("chromedriver");
let fs = require("fs");
let swd = require("selenium-webdriver");

let credentialsFile = process.argv[2];
let metaDataFile = process.argv[3];
let username, password, gModules, allLectures, allQuestions;
// browser build
let bldr = new swd.Builder();
// tab
let driver = bldr.forBrowser("chrome").build();

// ************************************Login******************************************************
// promise => page open future
let credentialsWillBeReadPromise = fs.promises.readFile(credentialsFile);
credentialsWillBeReadPromise.then(function (credentials) {
    //buffer conversion
    credentials = JSON.parse(credentials);
    username = credentials.username;
    password = credentials.password;
    //login page
    let googlepageWillbeOpenedPromise = driver.get("https://pepcoding.com/login");
    return googlepageWillbeOpenedPromise;
})
    .then(function () {
        //Search email,password
        let emailWillBeSelectedPromise = driver.findElement(swd.By.css("input[type=email]")); //attribute
        let passwordWillBeSelectedPromise = driver.findElement(swd.By.css("input[type=password]"));
        //Promise All => Promise Array => Promise =>
        let combinedPromise = Promise.all([emailWillBeSelectedPromise, passwordWillBeSelectedPromise]);
        // array promise => answer
        return combinedPromise;

    }).then(function (ElementsArray) {
        let emailWillBeSendPromise = ElementsArray[0].sendKeys(username);
        let passwordWillBeSendPromise = ElementsArray[1].sendKeys(password);
        let combinedInputPromise = Promise.all([emailWillBeSendPromise, passwordWillBeSendPromise]);
        return combinedInputPromise;

    }).then(function () {
        console.log("Password has been sent");
        let submitBtnWillSelected = driver.findElement(swd.By.css("button[type=submit]"));
        return submitBtnWillSelected;

    }).then(function (submitbtn) {
        let submitBtnWillBeClickedPromise = submitbtn.click();
        return submitBtnWillBeClickedPromise;

    })

    // ***********************************HomePage**************************************

    .then(function () {
        // You should always wait to load
        let willWaitForResourceToLoad = driver.wait(swd.until.elementsLocated(swd.By.css(".resource a")));
        return willWaitForResourceToLoad;
    })
    .then(function () {
        // Resource Page Card Find
        let resourceAnchorWillBeSelectedPromise = driver.findElement(swd.By.css(".resource a"));
        // clicking link find
        return resourceAnchorWillBeSelectedPromise;
    }).then(function (resourcePageAnchor) {
        let rPageLinkPromise = resourcePageAnchor.getAttribute("href");
        return rPageLinkPromise;
        // resource page link
    }).then(function (rPagelink) {
        // console.log("Reached Courses Page");
        let NavigateToCourseListPage = driver.get(rPagelink); // Will open page
        return NavigateToCourseListPage;
    })
    .then(function () {
        let siteOverlayWillBeSelectedPromise = driver.findElement(swd.By.css("#siteOverlay"));
        return siteOverlayWillBeSelectedPromise;
    }).then(function (soe) {
        //wait until page's overlay does not go (ie. page loads fully)
        let waitForOverlayToRemovePromise = driver.wait(swd.until.elementIsNotVisible(soe), 10000);
        return waitForOverlayToRemovePromise;
    }).then(function () {
        let courseWillBeLocatedPromise = driver.findElement(swd.By.css("#courseCard33"));
        return courseWillBeLocatedPromise;
    }).then(function (courseCard) {
        let courseCardWillBeClickedPromise = courseCard.click();
        return courseCardWillBeClickedPromise;
    })

    // ******************************************************* ModuleClick***************************************
    .then(function () {
        let lisTabToBeLocatedPromise = driver.wait(swd.until.elementLocated(swd.By.css(".lis.tab")), 10000);
        return lisTabToBeLocatedPromise;
    }).then(function () {
        let modulesWillBeSelectedPromise = driver.findElements(swd.By.css(".lis.tab"));
        return modulesWillBeSelectedPromise;
    }).then(function (modules) {
        // console.log(modules);
        gModules = modules;
        // console.log(modules.length);  4
        let moduleTextPromiseArray = [];
        for (let i = 0; i < modules.length; i++) {
            let moduleNamePromise = modules[i].getText();
            moduleTextPromiseArray.push(moduleNamePromise);
        }
        let allModuleNamesPromise = Promise.all(moduleTextPromiseArray);
        return allModuleNamesPromise;
    }).then(function (allModulesText) {
        let i;
        for (i = 0; i < allModulesText.length; i++) {
            if (allModulesText[i].includes("Data Structure and Algorithms") == true) {
                break;
            }
        }
        // console.log(gModules);
        let moduleWillBeClickedPromise = gModules[i].click();
        return moduleWillBeClickedPromise;
    })

    // ********************************************************Lecture**************************************

    .then(function () {
        let lecturesWillBeSelectedPromise = driver.findElements(swd.By.css(".title.black-text.no-margin"));
        return lecturesWillBeSelectedPromise;
    }).then(function (lectures) {
        allLectures = lectures;
        let lecturesNamePromiseArr = [];
        for (let i = 0; i < lectures.length; i++) {
            let currentLectureNamePromise = lectures[i].getText();
            lecturesNamePromiseArr.push(currentLectureNamePromise);
        }
        let allLecturesNamePromise = Promise.all(lecturesNamePromiseArr);
        return allLecturesNamePromise;
    }).then(function (allLectName) {
        let i;
        for (i = 0; i < allLectName.length; i++) {
            if (allLectName[i].includes("Recursion") === true) {
                break;
            }
        }
        let lectureWillBeClickedPromise = allLectures[i].click();
        return lectureWillBeClickedPromise;
    })

    // *******************************************************Question**************************************

    .then(function () {
        let questionsWillBeLoadedPromise = driver.wait(swd.until.elementLocated(swd.By.css(".green-text.no-margin")), 10000);
        return questionsWillBeLoadedPromise;
    }).then(function () {
        let questionsWillBeSelectedPromise = driver.findElements(swd.By.css(".green-text.no-margin"));
        return questionsWillBeSelectedPromise;
    }).then(function (questions) {
        allQuestions = questions;
        let QuestionsNamePromiseArr = [];
        for (let i = 0; i < questions.length; i++) {
            let currentQuestionName = questions[i].getText();
            QuestionsNamePromiseArr.push(currentQuestionName);
        }

        let allQuestionsPromise = Promise.all(QuestionsNamePromiseArr);
        return allQuestionsPromise;
    }).then(function (allQuestionsName) {
        let i;
        for (i = 0; i < allQuestionsName.length; i++) {
            if (allQuestionsName[i].includes("") === true) {
                break;
            }
        }
        let questionWillBeClickedPromise = allQuestions[i].click();
        return questionWillBeClickedPromise;
    })

    // *******************************************************EditorTab**************************************

    .then(function () {
        let editorTabsWillBeLoadedPromise = driver.wait(swd.until.elementLocated(swd.By.css(".tab.bold.editorTab")), 10000);
        return editorTabsWillBeLoadedPromise;
    }).then(function () {
        let editorTabWillBeSelectedPromise = driver.findElement(swd.By.css(".tab.bold.editorTab"));
        return editorTabWillBeSelectedPromise;
    }).then(function (editorTabCame) {
        let editorTabWillBeClickedPromise = editorTabCame.click();
        return editorTabWillBeClickedPromise;
    })

    .catch(function (err) {
        console.log(err);
    })
