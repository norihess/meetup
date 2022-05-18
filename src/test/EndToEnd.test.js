import { puppeteerErrors } from "puppeteer";
import puppeteer from 'puppeteer';

describe (' show/hide an event details', () => {
	let browser;
  let page;
  beforeAll(async () => {
    jest.setTimeout(50000);
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });

  test('User can expand an event to see its details', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/');

    await page.waitForSelector('.event');
    await page.click('.event .details-btn');

    // const eventDetails = await page.$('.event .event__Details');
		const eventDetails = await page.$('.event .event__Details');
    expect(eventDetails).toBeDefined();
    browser.close();
  });

	test('User can expand an event to see its details', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/');

    await page.waitForSelector('.event');
    await page.click('.event .details-btn');

    const eventDetails = await page.$('.event .event__Details');
    expect(eventDetails).toBeDefined();
    browser.close();
  });
});