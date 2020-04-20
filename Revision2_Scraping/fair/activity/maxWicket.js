let request = require("request");
let fs = require("fs");
let cheerio = require("cheerio");

request(`https://www.espncricinfo.com/series/19322/scorecard/1187683`, function (err, res, html) {
    if (err === null && res.statusCode === 200) {

        parseHtml(html);
    } else if (res.statusCode === 404) {
        console.error.log("Invalid URL");
    } else {
        console.log(err);
        console.log(res.statusCode);
    }
})

function parseHtml(html) {
    console.log("***Parsing Html***");
    let $ = cheerio.load(html);
    let maxWicket = 0;
    let namePlayer = "";
    let bowlers = $(".scorecard-section.bowling table tbody tr");
    fs.writeFileSync("bowling.html", bowlers);

    for (let i = 0; i < bowlers.length; i++) {
        let bowlerName = $($(bowlers[i]).find("td")[0]).text();
        let wickets = $($(bowlers[i]).find("td")[5]).text();
        if (wickets > maxWicket) {
            maxWicket = wickets;
            namePlayer = bowlerName;
        }
    }

    console.log(namePlayer + "    " + maxWicket);
}
