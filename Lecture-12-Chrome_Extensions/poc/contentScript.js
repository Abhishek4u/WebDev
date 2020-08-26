function replaceImg() {
    let imgPaths = [
        "images/img-5.jpeg"
    ]

    for (let i = 1; i <= 4; i++) {
        imgPaths.push(`images/img-${i}.jpg`)
    }

    // all images paths
    let aIP = document.querySelectorAll("img");

    for (let i = 0; i < aIP.length; i++) {

        let idx = Math.floor(Math.random() * imgPaths.length);

        let fullPath = chrome.extension.getURL(imgPaths[idx]);
        console.log(fullPath);

        aIP[i].src = fullPath;
        aIP[i].srcset = fullPath;
    }
}

let message = { greeting: "hello" };

chrome.runtime.sendMessage(message, function (response) {

    console.log("recieved from background.js")
    console.log(response);

});

chrome.runtime.onMessage.addListener(

    function (request, sender, sendResponse) {
        
        console.log(sender);
        // if (request.greeting == "hello") {
        //     console.log("Recieved from popup");
        // }
        replaceImg()
    })