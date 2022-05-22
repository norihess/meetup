import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {
  let browser;
  let page;
  beforeAll(async () => {
    jest.setTimeout(30000);
		browser = await puppeteer.launch()
     
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });

  test('An event element is collapsed by default', async () => {
    const extraDetails = await page.$('.event .details-button');
    expect(extraDetails).toBeDefined();
  });

  test('User can expand an event to see its details', async () => {
    // await page.click('.event .details-btn');
    // const extraDetails = await page.$('.event .details-button');
    await page.evaluate(()=> document.querySelector(".details-button").click());
    const extraDetails = await page.$('.event .details-button');
    expect(extraDetails).toBeDefined();
  });

	test('User can collapse an event to hide its details', async () => {
    await page.evaluate(()=> document.querySelector(".details-button").click());
    const extraDetails = await page.$('.event .details-button');
    expect(extraDetails).toBeDefined();
  });
});
