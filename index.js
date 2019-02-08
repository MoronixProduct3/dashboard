const puppeteer = require('puppeteer-core');

// Loading settings
try{
    var settings = require('./settings.json');
}catch(e){
    console.log('Error: Maked sure to create the settings.json file');
    process.exit(1);
}

(async () => {
    const browser = await puppeteer.launch({executablePath: settings.chromium_path});
    const page = await browser.newPage();
    await page.goto(settings.url);
    await page.screenshot({path: 'example.png'});
    await browser.close();
})();
