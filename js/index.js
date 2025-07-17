console.log("Hello, World!");
let result = {
    "tag": "",
    "free": true,
    "role": false,
    "user": "shuvam0310",
    "email": "shuvam0310@gmail.com",
    "score": 0.48,
    "state": "unknown",
    "domain": "gmail.com",
    "reason": "no_connect",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "did_you_mean": "",
    "format_valid": true
}

submitBtn.addEventListener("click", async (e) => {
    e.preventDefault()
    console.log("Button clicked");
    resultCont.innerHTML = `<img src="img/loading.svg"></img>`
    let key = "ema_live_67JIswS4wlt3V6qBI1da0lqmcHTC5CpmLwd7szxi"
    let email = document.getElementById("username").value
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url);
    let result = await res.json();
    let str = ''
    for (key of Object.keys(result)) {
        if (result[key] !== "" && result[key] !==" ") {
            str = str + `<div>${key}: ${result[key]}</div>`
        }
    }

    console.log(str);
    resultCont.innerHTML = str;


});





