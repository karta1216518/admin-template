import puppeteer from "puppeteer";

describe("Template", () => {
  let browser;
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      userDataDir: "./__test__/userData",
      slowMo: 20
    });
  });

  test("Browser On", async () => {
    let page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    expect(page).toBeTruthy;
  });

  afterAll(async () => {
    browser.close();
  });
});
