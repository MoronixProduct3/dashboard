const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://securbot.gel.usherbrooke.ca/');
    await page.screenshot({path: 'example.png'});
    await browser.close();
})();
