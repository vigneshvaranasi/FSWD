const puppeteer = require('puppeteer');

async function safeGoto(page, url, retries = 3) {
    for (let i = 0; i < retries; i++) {
        try {
            await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
            return true;
        } catch (err) {
            if (i === retries - 1) throw err;
            console.log(`Retrying (${i + 1}/${retries}) due to error: ${err.message}`);
        }
    }
}

async function run() {
    const browser = await puppeteer.launch({
        headless: false, // Set to true if you want headless mode
        defaultViewport: null,
    });
    const page = await browser.newPage();

    // Set a custom user agent to avoid being blocked by the server
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');

    try {
        // Use the retry mechanism to load the page
        await safeGoto(page, 'https://vigneshvaranasi.me');

        // Wait for 3 seconds to ensure the page is fully loaded
        await new Promise(resolve => setTimeout(resolve, 3000));

        // Generate the PDF
        await page.pdf({
            path: 'example.pdf',
            format: 'A4',
            printBackground: true, // Include background graphics
            margin: {
                top: '50px',
                right: '50px',
                bottom: '50px',
                left: '50px',
            },
        });

        console.log('PDF generated successfully.');
    } catch (error) {
        console.error('Error occurred:', error.message);
    } finally {
        await browser.close();
    }
}

run();
