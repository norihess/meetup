import { puppeteerErrors } from "puppeteer";
import puppeteer from 'puppeteer';

describe (' show/hide an event details', () => {

  test('User can expand an event to see its details', async () => {
		beforeAll(async () => {
			jest.setTimeout(30000);
	});
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