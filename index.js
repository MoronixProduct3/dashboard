const puppeteer = require('puppeteer-core');

(async () => {
    const browser = await puppeteer.launch({executablePath:'/usr/bin/chromium'});
    const page = await browser.newPage();
    await page.goto('http://securbot.gel.usherbrooke.ca/');
    await page.screenshot({path: 'example.png'});
    await browser.close();
})();
