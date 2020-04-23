let request = require("request");
let fs = require("fs");
let cheerio = require("cheerio");
let gcount = 0, leaderboard = [];

request(`https://www.espncricinfo.com/scores/series/19322`, function (err, res, html) {
    if (err === null && res.statusCode === 200) {

        parseSeries(html);
    } else if (res.statusCode === 404) {
        console.error.log("Invalid URL");
    } else {
        console.log(err);
        console.log(res.statusCode);
    }
})

// series => filter => match request
// 1-> link -> request
function parseSeries(html) {
    //parsing series page
    let $ = cheerio.load(html);
    let cards = $(".cscore.cscore--final.cricket.cscore--watchNotes");
    //cards => type => ODI/T20
    for (let i = 0; i < cards.length; i++) {
        let matchType = $(cards[i]).find(".cscore_info-overview").html(); // wraping of array calling using cheerio
        let test = matchType.includes("ODI") || matchType.includes("T20");
        if (test === true) {
            // console.log(matchType);
            let anchor = $(cards[i]).find(".cscore_buttonGroup ul li a").attr("href");
            let matchLink = `https://www.espncricinfo.com${anchor}`;
            goToMatchPage(matchLink);
        }
    }
    // console.log("``````````````````````````````````````````");
}

// page request
// link => request
function goToMatchPage(MatchLink) {
    gcount++;
    request(MatchLink, function (err, res, html) {
        if (err === null && res.statusCode === 200) {
            handleMatch(html);
            gcount--;
            if (gcount == 0) {
                console.table(leaderboard);
            }
        } else if (res.statusCode === 404) {
            console.error.log("Invalid URL");
        } else {
            console.log(err);
            console.log(res.statusCode);
        }
    })
}

// handle match
// html => team,format,runs,name
function handleMatch(html) {
    const d = cheerio.load(html);
    let format = d(".cscore.cscore--final.cricket .cscore_info-overview").html();
    format =  format.includes("ODI") ? "ODI" : "T20";

    let teams = d(".sub-module.scorecard h2");
    let innings = d(".sub-module.scorecard");
    // console.log(format);

    for (let i = 0; i < innings.length; i++) { // for innings
        let batsManRows = d(innings[i]).find(".scorecard-section.batsmen .flex-row .wrap.batsmen");

        // console.log(d(teams[i]).text());
        let team = d(teams[i]).text();
        for (let br = 0; br < batsManRows.length; br++) { //for batsmensnode lea
            let batsMan = d(batsManRows[br]);
            let batsManName = batsMan.find(".cell.batsmen").text();
            let batsManRuns = batsMan.find(".cell.runs").html(); // 1st block
            handlePlayer(format, team, batsManName, batsManRuns);
            // console.log(batsManName + " " + batsManRuns);
        }
        // console.log("************************");
    }
    // console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
}

// player
// leaderboard filling
function handlePlayer(format, team, batsManName, batsManRuns) {
    batsManRuns = Number(batsManRuns);
    for (let i = 0; i < leaderboard.length; i++) {
        let pObj = leaderboard[i];
        if (pObj.Name == batsManName && pObj.Team == team && pObj.Format == format) {
            pObj.Runs += batsManRuns;
            return;
        }
    }
    let obj = {
        Runs: batsManRuns,
        Format: format,
        Team: team,
        Name: batsManName
    }
    leaderboard.push(obj);

}