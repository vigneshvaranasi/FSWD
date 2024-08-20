const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // Ensure the 'images' directory exists
  const imageDir = path.resolve(__dirname, 'images');
  if (!fs.existsSync(imageDir)) {
    fs.mkdirSync(imageDir);
  }

  let counter = 0;

  // Monitor network requests for images
  page.on('response', async (response) => {
    const matches = /.*\.(jpg|png|svg|gif)$/.exec(response.url());
    if (matches && (matches.length === 2)) {
      const extension = matches[1];
      try {
        const buffer = await response.buffer();
        fs.writeFileSync(path.join(imageDir, `image-${counter}.${extension}`), buffer);
        console.log(`Saved image-${counter}.${extension}`);
        counter += 1;
      } catch (error) {
        console.error(`Failed to save image-${counter}.${extension}:`, error.message);
      }
    }
  });

  try {
    await page.goto('https://bside.vigneshvaranasi.me/', { waitUntil: 'networkidle2' });

    // Function to scroll down the page
    const scrollPage = async () => {
      await page.evaluate(async () => {
        const scrollDelay = 1000; // Time to wait for scrolling
        const scrollHeight = document.body.scrollHeight;
        let scrolled = 0;
        while (scrolled < scrollHeight) {
          window.scrollTo(0, scrolled);
          scrolled += window.innerHeight;
          await new Promise(resolve => setTimeout(resolve, scrollDelay));
        }
      });
    };

    await scrollPage();

    // Capture any remaining images after scrolling
    await new Promise(resolve => setTimeout(resolve, 35000)); // Adjust as needed
  } catch (error) {
    console.error('Failed to load the page:', error.message);
  }

  await browser.close();
})();
