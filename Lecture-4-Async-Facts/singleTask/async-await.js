function promiseCreater() {
    return new Promise(function (resolve, reject) { //scb,fcb
        setTimeout(function () {
            reject("Resolved val of promise");
            // resolve("resolved value of promise");
        }, 1000);
    })
}
async function promiseConsumer() {
    // promiseCreater().then(function(data){
    //   console.log(data);
    // })
    try {
        let data = await promiseCreater(); //await can be used only in async function
        console.log(data);
    } catch (err) {
        console.log("Inside Catch")
        console.log(err);
    }
}
promiseConsumer();
  // then => await
  // create promise => async function