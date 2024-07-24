const puppeteer = require('puppeteer');

async function run() {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
    });
    const page = await browser.newPage();
    // await page.goto('https://google.com');
    await page.goto('https://vigneshvaranasi.me');

    // Wait for 10 seconds
    await new Promise(resolve => setTimeout(resolve, 3000));

    await page.screenshot({ path: 'example.png',fullPage: true });
    await browser.close();
}

run();