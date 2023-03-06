import puppeteer from "puppeteer";

// https://www.bannerbear.com/blog/how-to-take-screenshots-with-puppeteer/
(async () => {
  // Create a browser instance
  const browser = await puppeteer.launch();

  // Create a new page
  const page = await browser.newPage();

  // Set viewport width and height
  await page.setViewport({ width: 1280, height: 720 });

  let website_url =
    "https://www.tradingview.com/widgetembed/?frameElementId=tradingview_540fd&interval=D&hidetoptoolbar=1&hidesidetoolbar=1&symboledit=0&saveimage=0&toolbarbg=f1f3f6&studies=STD%3BMACD%1FSTD%3BMA%25Ribbon%1FSTD%3BStochastic_RSI%1FVolume%40tv-basicstudies&theme=dark&style=1&timezone=Asia%2FJakarta&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=www.tradingview.com&utm_medium=widget_new&utm_campaign=chart";
    website_url += '&symbol=IDX:ANTM'

  // Open URL in current page
  await page.goto(website_url, { waitUntil: "networkidle0" });
  //   new Promise((resolve) => setTimeout(resolve, 5));
  // Capture screenshot
  await page.screenshot({
    path: "screenshot.jpg",
    fullPage: true,
  });

  // Close the browser instance
  await browser.close();
})();
