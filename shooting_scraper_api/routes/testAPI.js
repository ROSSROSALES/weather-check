var express = require("express");
var router = express.Router();
const puppeteer = require("puppeteer");

router.get("/", async function(req, res, next) {

    console.log("Connection good")

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.gunviolencearchive.org/reports/mass-shooting')

    const data = await page.evaluate(() => {
        return Array.from(document.querySelectorAll(".odd td")).map(x => x.textContent)
    })

    var date = data[1]
    var State = data[2]
    var killed = data[5]
    var injured = data[6]

    res.send({date, State, killed, injured})

    browser.close()





});

module.exports = router;