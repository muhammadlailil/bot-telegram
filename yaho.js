import puppeteer from "puppeteer";
import installMouseHelper from "./install-mouse-helper.js";

// https://www.bannerbear.com/blog/how-to-take-screenshots-with-puppeteer/
(async () => {
  // Create a browser instance
  const browser = await puppeteer.launch();
  // Create a new page
  const page = await browser.newPage();
  await installMouseHelper(page);

  //   // Set viewport width and height
  await page.setViewport({ width: 1280, height: 700 });

  let website_url = "https://finance.yahoo.com/chart/ANTM.JK?showOptin=1&guccounter=1#eyJpbnRlcnZhbCI6ImRheSIsInBlcmlvZGljaXR5IjoxLCJjYW5kbGVXaWR0aCI6MTUuNSwidm9sdW1lVW5kZXJsYXkiOnRydWUsImNyb3NzaGFpciI6dHJ1ZSwiY2hhcnRUeXBlIjoiY2FuZGxlIiwiZXh0ZW5kZWQiOmZhbHNlLCJtYXJrZXRTZXNzaW9ucyI6e30sImFnZ3JlZ2F0aW9uVHlwZSI6Im9obGMiLCJjaGFydFNjYWxlIjoibGluZWFyIiwicGFuZWxzIjp7ImNoYXJ0Ijp7InBlcmNlbnQiOjAuNjQsImRpc3BsYXkiOiJBTlRNLkpLIiwiY2hhcnROYW1lIjoiY2hhcnQiLCJpbmRleCI6MCwieUF4aXMiOnsibmFtZSI6ImNoYXJ0IiwicG9zaXRpb24iOm51bGx9LCJ5YXhpc0xIUyI6W10sInlheGlzUkhTIjpbImNoYXJ0Iiwi4oCMdm9sIHVuZHLigIwiXX0sIuKAjHJzaeKAjCAoMTQsQykiOnsicGVyY2VudCI6MC4xNiwiZGlzcGxheSI6IuKAjHJzaeKAjCAoMTQsQykiLCJjaGFydE5hbWUiOiJjaGFydCIsImluZGV4IjoxLCJ5QXhpcyI6eyJuYW1lIjoi4oCMcnNp4oCMICgxNCxDKSIsInBvc2l0aW9uIjpudWxsfSwieWF4aXNMSFMiOltdLCJ5YXhpc1JIUyI6WyLigIxyc2nigIwgKDE0LEMpIl19LCLigIxtYWNk4oCMICgxMiwyNiw5KSI6eyJwZXJjZW50IjowLjE5OTk5OTk5OTk5OTk5OTk2LCJkaXNwbGF5Ijoi4oCMbWFjZOKAjCAoMTIsMjYsOSkiLCJjaGFydE5hbWUiOiJjaGFydCIsImluZGV4IjoyLCJ5QXhpcyI6eyJuYW1lIjoi4oCMbWFjZOKAjCAoMTIsMjYsOSkiLCJwb3NpdGlvbiI6bnVsbH0sInlheGlzTEhTIjpbXSwieWF4aXNSSFMiOlsi4oCMbWFjZOKAjCAoMTIsMjYsOSkiXX19LCJzZXRTcGFuIjpudWxsLCJsaW5lV2lkdGgiOjIsInN0cmlwZWRCYWNrZ3JvdW5kIjpmYWxzZSwiZXZlbnRzIjp7ImRpdnMiOnRydWUsInNwbGl0cyI6dHJ1ZSwidHJhZGluZ0hvcml6b24iOiJub25lIiwic2lnRGV2RXZlbnRzIjpbXX0sImNvbG9yIjoiIzAwODFmMiIsInN0cmlwZWRCYWNrZ3JvdWQiOnRydWUsInJhbmdlIjpudWxsLCJsYXlvdXQiOnsiaW50ZXJ2YWwiOjEsInBlcmlvZGljaXR5IjoxLCJ0aW1lVW5pdCI6Im1pbnV0ZSIsImNhbmRsZVdpZHRoIjo3Ljk5MjA1MjY2NjIyNjcyNCwiZmxpcHBlZCI6ZmFsc2UsInZvbHVtZVVuZGVybGF5Ijp0cnVlLCJhZGoiOnRydWUsImNyb3NzaGFpciI6dHJ1ZSwiY2hhcnRUeXBlIjoiY2FuZGxlIiwiZXh0ZW5kZWQiOmZhbHNlLCJtYXJrZXRTZXNzaW9ucyI6e30sImFnZ3JlZ2F0aW9uVHlwZSI6Im9obGMiLCJjaGFydFNjYWxlIjoibGluZWFyIiwicGFuZWxzIjp7ImNoYXJ0Ijp7InBlcmNlbnQiOjEsImRpc3BsYXkiOiJCQlJJLkpLIiwiY2hhcnROYW1lIjoiY2hhcnQiLCJpbmRleCI6MCwieUF4aXMiOnsibmFtZSI6ImNoYXJ0IiwicG9zaXRpb24iOm51bGx9LCJ5YXhpc0xIUyI6W10sInlheGlzUkhTIjpbImNoYXJ0Iiwi4oCMdm9sIHVuZHLigIwiXX19LCJzZXRTcGFuIjpudWxsLCJvdXRsaWVycyI6ZmFsc2UsImFuaW1hdGlvbiI6dHJ1ZSwiaGVhZHNVcCI6eyJzdGF0aWMiOnRydWUsImR5bmFtaWMiOmZhbHNlLCJmbG9hdGluZyI6ZmFsc2V9LCJsaW5lV2lkdGgiOjIsInN0cmlwZWRCYWNrZ3JvdW5kIjp0cnVlLCJjb2xvciI6IiMwMDgxZjIiLCJyYW5nZSI6bnVsbCwiZXZlbnRzIjp0cnVlLCJzdHJpcGVkQmFja2dyb3VkIjp0cnVlLCJldmVudE1hcCI6eyJjb3Jwb3JhdGUiOltdLCJzaWdEZXYiOnt9fSwic3ltYm9scyI6W3sic3ltYm9sIjoiQkJSSS5KSyIsInN5bWJvbE9iamVjdCI6eyJzeW1ib2wiOiJCQlJJLkpLIiwicXVvdGVUeXBlIjoiRVFVSVRZIiwiZXhjaGFuZ2VUaW1lWm9uZSI6IkFzaWEvSmFrYXJ0YSIsImV4Y2hhbmdlVGltZXpvbmVOYW1lIjoiQXNpYS9KYWthcnRhIn0sInBlcmlvZGljaXR5IjoxLCJpbnRlcnZhbCI6MSwidGltZVVuaXQiOiJtaW51dGUiLCJzZXRTcGFuIjpudWxsfV0sInN0dWRpZXMiOnsi4oCMdm9sIHVuZHLigIwiOnsidHlwZSI6InZvbCB1bmRyIiwiaW5wdXRzIjp7ImlkIjoi4oCMdm9sIHVuZHLigIwiLCJkaXNwbGF5Ijoi4oCMdm9sIHVuZHLigIwifSwib3V0cHV0cyI6eyJVcCBWb2x1bWUiOiIjMGRiZDZlZWUiLCJEb3duIFZvbHVtZSI6IiNmZjU1NDdlZSJ9LCJwYW5lbCI6ImNoYXJ0IiwicGFyYW1ldGVycyI6eyJjaGFydE5hbWUiOiJjaGFydCIsImVkaXRNb2RlIjp0cnVlfSwiZGlzYWJsZWQiOmZhbHNlfX19LCJwcmVmZXJlbmNlcyI6eyJjdXJyZW50UHJpY2VMaW5lIjp0cnVlLCJkcmFnZ2luZyI6eyJzZXJpZXMiOnRydWUsInN0dWR5Ijp0cnVlLCJ5YXhpcyI6dHJ1ZX0sImRyYXdpbmdzIjpudWxsLCJoaWdobGlnaHRzUmFkaXVzIjoxMCwiaGlnaGxpZ2h0c1RhcFJhZGl1cyI6MzAsIm1hZ25ldCI6ZmFsc2UsImhvcml6b250YWxDcm9zc2hhaXJGaWVsZCI6bnVsbCwibGFiZWxzIjp0cnVlLCJsYW5ndWFnZSI6bnVsbCwidGltZVpvbmUiOm51bGwsIndoaXRlc3BhY2UiOjUwLCJ6b29tSW5TcGVlZCI6bnVsbCwiem9vbU91dFNwZWVkIjpudWxsLCJ6b29tQXRDdXJyZW50TW91c2VQb3NpdGlvbiI6ZmFsc2V9LCJzeW1ib2xzIjpbeyJzeW1ib2wiOiJBTlRNLkpLIiwic3ltYm9sT2JqZWN0Ijp7InN5bWJvbCI6IkFOVE0uSksiLCJxdW90ZVR5cGUiOiJFUVVJVFkiLCJleGNoYW5nZVRpbWVab25lIjoiQXNpYS9KYWthcnRhIn0sInBlcmlvZGljaXR5IjoxLCJpbnRlcnZhbCI6ImRheSIsInNldFNwYW4iOm51bGx9XSwiZXZlbnRNYXAiOnsiY29ycG9yYXRlIjp7ImRpdnMiOnRydWUsInNwbGl0cyI6dHJ1ZX0sInNpZ0RldiI6e319LCJzdHVkaWVzIjp7IuKAjHZvbCB1bmRy4oCMIjp7InR5cGUiOiJ2b2wgdW5kciIsImlucHV0cyI6eyJpZCI6IuKAjHZvbCB1bmRy4oCMIiwiZGlzcGxheSI6IuKAjHZvbCB1bmRy4oCMIn0sIm91dHB1dHMiOnsiVXAgVm9sdW1lIjoiIzAwYjA2MSIsIkRvd24gVm9sdW1lIjoiI2ZmMzMzYSJ9LCJwYW5lbCI6ImNoYXJ0IiwicGFyYW1ldGVycyI6eyJ3aWR0aEZhY3RvciI6MC40NSwiY2hhcnROYW1lIjoiY2hhcnQiLCJwYW5lbE5hbWUiOiJjaGFydCJ9fSwi4oCMcnNp4oCMICgxNCxDKSI6eyJ0eXBlIjoicnNpIiwiaW5wdXRzIjp7IlBlcmlvZCI6MTQsIkZpZWxkIjoiQ2xvc2UiLCJpZCI6IuKAjHJzaeKAjCAoMTQsQykiLCJkaXNwbGF5Ijoi4oCMcnNp4oCMICgxNCxDKSJ9LCJvdXRwdXRzIjp7IlJTSSI6IiNhZDZlZmYifSwicGFuZWwiOiLigIxyc2nigIwgKDE0LEMpIiwicGFyYW1ldGVycyI6eyJzdHVkeU92ZXJab25lc0VuYWJsZWQiOnRydWUsInN0dWR5T3ZlckJvdWdodFZhbHVlIjo4MCwic3R1ZHlPdmVyQm91Z2h0Q29sb3IiOiIjNzlmNGJkIiwic3R1ZHlPdmVyU29sZFZhbHVlIjoyMCwic3R1ZHlPdmVyU29sZENvbG9yIjoiI2ZmODA4NCIsImNoYXJ0TmFtZSI6ImNoYXJ0IiwicGFuZWxOYW1lIjoi4oCMcnNp4oCMICgxNCxDKSJ9fSwi4oCMbWFjZOKAjCAoMTIsMjYsOSkiOnsidHlwZSI6Im1hY2QiLCJpbnB1dHMiOnsiRmFzdCBNQSBQZXJpb2QiOjEyLCJTbG93IE1BIFBlcmlvZCI6MjYsIlNpZ25hbCBQZXJpb2QiOjksImlkIjoi4oCMbWFjZOKAjCAoMTIsMjYsOSkiLCJkaXNwbGF5Ijoi4oCMbWFjZOKAjCAoMTIsMjYsOSkifSwib3V0cHV0cyI6eyJNQUNEIjoiI2FkNmVmZiIsIlNpZ25hbCI6IiNmZmEzM2YiLCJJbmNyZWFzaW5nIEJhciI6IiM3OWY0YmQiLCJEZWNyZWFzaW5nIEJhciI6IiNmZjgwODQifSwicGFuZWwiOiLigIxtYWNk4oCMICgxMiwyNiw5KSIsInBhcmFtZXRlcnMiOnsiY2hhcnROYW1lIjoiY2hhcnQiLCJwYW5lbE5hbWUiOiLigIxtYWNk4oCMICgxMiwyNiw5KSJ9fSwi4oCMUFNBUuKAjCAoMC4wMiwwLjIpIjp7InR5cGUiOiJQU0FSIiwiaW5wdXRzIjp7Ik1pbmltdW0gQUYiOjAuMDIsIk1heGltdW0gQUYiOjAuMiwiaWQiOiLigIxQU0FS4oCMICgwLjAyLDAuMikiLCJkaXNwbGF5Ijoi4oCMUFNBUuKAjCAoMC4wMiwwLjIpIn0sIm91dHB1dHMiOnsiUmVzdWx0IjoiIzAwMDAwMCJ9LCJwYW5lbCI6ImNoYXJ0IiwicGFyYW1ldGVycyI6eyJjaGFydE5hbWUiOiJjaGFydCIsInBhbmVsTmFtZSI6ImNoYXJ0In19LCLigIxtYeKAjCAoNSxDLG1hLDApIjp7InR5cGUiOiJtYSIsImlucHV0cyI6eyJQZXJpb2QiOiI1IiwiRmllbGQiOiJDbG9zZSIsIlR5cGUiOiJzaW1wbGUiLCJPZmZzZXQiOjAsImlkIjoi4oCMbWHigIwgKDUsQyxtYSwwKSIsImRpc3BsYXkiOiLigIxtYeKAjCAoNSxDLG1hLDApIn0sIm91dHB1dHMiOnsiTUEiOiIjYWQ2ZWZmIn0sInBhbmVsIjoiY2hhcnQiLCJwYXJhbWV0ZXJzIjp7ImNoYXJ0TmFtZSI6ImNoYXJ0IiwicGFuZWxOYW1lIjoiY2hhcnQifX0sIuKAjG1h4oCMICgxMCxDLG1hLDApIjp7InR5cGUiOiJtYSIsImlucHV0cyI6eyJQZXJpb2QiOiIxMCIsIkZpZWxkIjoiQ2xvc2UiLCJUeXBlIjoic2ltcGxlIiwiT2Zmc2V0IjowLCJpZCI6IuKAjG1h4oCMICgxMCxDLG1hLDApIiwiZGlzcGxheSI6IuKAjG1h4oCMICgxMCxDLG1hLDApIn0sIm91dHB1dHMiOnsiTUEiOiIjZmY4MGM1In0sInBhbmVsIjoiY2hhcnQiLCJwYXJhbWV0ZXJzIjp7ImNoYXJ0TmFtZSI6ImNoYXJ0IiwicGFuZWxOYW1lIjoiY2hhcnQifX0sIuKAjG1h4oCMICgyMCxDLG1hLDApIjp7InR5cGUiOiJtYSIsImlucHV0cyI6eyJQZXJpb2QiOiIyMCIsIkZpZWxkIjoiQ2xvc2UiLCJUeXBlIjoic2ltcGxlIiwiT2Zmc2V0IjowLCJpZCI6IuKAjG1h4oCMICgyMCxDLG1hLDApIiwiZGlzcGxheSI6IuKAjG1h4oCMICgyMCxDLG1hLDApIn0sIm91dHB1dHMiOnsiTUEiOiIjZmYzMzNhIn0sInBhbmVsIjoiY2hhcnQiLCJwYXJhbWV0ZXJzIjp7ImNoYXJ0TmFtZSI6ImNoYXJ0IiwicGFuZWxOYW1lIjoiY2hhcnQifX0sIuKAjG1h4oCMICg1MCxDLG1hLDApIjp7InR5cGUiOiJtYSIsImlucHV0cyI6eyJQZXJpb2QiOjUwLCJGaWVsZCI6IkNsb3NlIiwiVHlwZSI6InNpbXBsZSIsIk9mZnNldCI6MCwiaWQiOiLigIxtYeKAjCAoNTAsQyxtYSwwKSIsImRpc3BsYXkiOiLigIxtYeKAjCAoNTAsQyxtYSwwKSJ9LCJvdXRwdXRzIjp7Ik1BIjoiIzAwYTE5YSJ9LCJwYW5lbCI6ImNoYXJ0IiwicGFyYW1ldGVycyI6eyJjaGFydE5hbWUiOiJjaGFydCIsInBhbmVsTmFtZSI6ImNoYXJ0In19fX0-";

  // Open URL in current page
  await page.goto(website_url, { waitUntil: "networkidle0" });

  new Promise((resolve) => setTimeout(resolve, 10));
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

  await page.hover("#fin-chartiq");
  await page.mouse.move(1200, 300);
  await page.mouse.click(1200, 300);

  // Capture screenshot
  await page.screenshot({
    path: "antm.jpg",
    fullPage: true,
  });

  // Close the browser instance
  await browser.close();
})();
