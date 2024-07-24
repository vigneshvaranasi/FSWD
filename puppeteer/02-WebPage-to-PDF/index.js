const puppeteer = require('puppeteer');

(async () => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const website_url = 'https://www.bannerbear.com/blog/how-to-download-images-from-a-website-using-puppeteer/'; 
    await page.goto(website_url, { waitUntil: 'networkidle0' }); 

    //To reflect CSS used for screens instead of print
    await page.emulateMediaType('screen');

    // Download the PDF
    const pdf = await page.pdf({
        path: 'result.pdf',
        margin: { top: '100px', right: '50px', bottom: '100px', left: '50px' },
        printBackground: true,
        format: 'A4',
    });

    await browser.close();
})();