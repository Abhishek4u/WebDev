let request = require("request");
let fs = require("fs");
let cheerio = require("cheerio");
console.log("Before");

// request("https://www.espncricinfo.com/series/19322/commentary/1187683",function(err,res,html) {
request(`https://www.espncricinfo.com/series/19322/commentary/1187683`, function (err, res, html) {
    if (err === null && res.statusCode === 200) {
        //fs.writeFile("index.html",html,function(err) {
        // console.log("Written file to disk");
        // })
        // fs.writeFileSync("index.html", html);
        parseHtml(html);
    } else if (res.statusCode === 404) {
        console.error.log("Invalid URL");
    } else {
        console.log(err);
        console.log(res.statusCode);
    }
})

// html => html
// text => text => print text
// cheerio array => if uses index => for functions  => use cheerio to wrap
// html => parse => library
function parseHtml(html) {
    // document.querySelector => $
    console.log("`````````````````````````````````````````````````");
    let $ = cheerio.load(html);
    let itemWrapper = $(".item-wrapper .description"); // tag inside one tag
    let text = $(itemWrapper[0]).text();
    console.log(text);
}
console.log("After");