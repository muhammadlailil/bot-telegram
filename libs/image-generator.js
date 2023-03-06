import puppeteer from "puppeteer";
import installMouseHelper from "../install-mouse-helper.js";

export default async function generateChartSaham(website_url,name) {
     const browser = await puppeteer.launch();
     const page = await browser.newPage();
     await installMouseHelper(page);
     await page.setViewport({ width: 1280, height: 700 });
     await page.goto(website_url, { waitUntil: "networkidle0" });
     new Promise((resolve) => setTimeout(resolve, 10));

     // remove same html
     removeHtmlCode(page)
     await page.hover("#fin-chartiq");
     await page.mouse.move(1200, 300);
     await page.mouse.click(1200, 300);

     // Capture screenshot
     await page.screenshot({
          path: `cart-trade/${name}.jpg`,
          fullPage: true,
     });

     // Close the browser instance
     await browser.close();
}

async function removeHtmlCode(page){
     let selector = "header";
     await page.evaluate(
          (selector) =>
               document.querySelectorAll(selector).forEach((el) => {
                    el.remove();
               }),
          selector
     );
     let tolbar = "#chart-toolbar";
     await page.evaluate(
          (tolbar) =>
               document.querySelectorAll(tolbar).forEach((el) => {
                    el.remove();
               }),
          tolbar
     );
     let footer = "footer";
     await page.evaluate(
          (footer) => document.querySelectorAll(footer).forEach((el) => el.remove()),
          footer
     );
     let wislish = 'div[title="Add to watchlist"]';
     await page.evaluate(
          (wislish) =>
               document.querySelectorAll(wislish).forEach((el) => el.remove()),
          wislish
     );
     let showMore = 'button[title="Show more"]';
     await page.evaluate(
          (showMore) =>
               document.querySelectorAll(showMore).forEach((el) => el.remove()),
          showMore
     );
     let chartSize = ".chartSize";
     await page.evaluate(
          (chartSize) =>
               document.querySelectorAll(chartSize).forEach((el) => el.remove()),
          chartSize
     );
     await page.evaluate((sel) => {
          var elements = document.querySelectorAll(sel);
          for (var i = 0; i < elements.length; i++) {
               elements[i].parentNode.removeChild(elements[i]);
          }
     }, "aside");
     new Promise((resolve) => setTimeout(resolve, 50));
     let chart = "#fin-chartiq";
     await page.evaluate(
          (chart) =>
               document
                    .querySelectorAll(chart)
                    .forEach((el) => el.setAttribute("style", "width:100%;height:85vh;")),
          chart
     );
     let tooltip = ".stx-tooltip";
     await page.evaluate(
          (tooltip) =>
               document
                    .querySelectorAll(tooltip)
                    .forEach((el) => el.setAttribute("style", "dislay:none")),
          tooltip
     );
}