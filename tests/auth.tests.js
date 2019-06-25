describe('on page load', () => {
  beforeAll(async () => {
    jest.setTimeout(20000);
  });

  const  websiteUrl = 'https://evernote.com/';
  
  test('Login successfully', async () => {
    await page.goto( websiteUrl, { waitUntil: 'load', timeout: 0 });
    await page.evaluate(() => {
     [...document.querySelectorAll('a')].find(element => element.textContent === 'Log in').click();
    });
    await page.waitForNavigation({ waitUntil: 'networkidle0' });
    await page.type('input[name=username]', 'usman.solemn@gmail.com');
    await page.click('input[type=submit]');   
    await page.waitFor(3000);
    await page.evaluate(() => {
      [...document.querySelectorAll('input[type=password]')][0].value = '123456';
     });
    await page.click('input[type=submit]');
    await page.waitFor(30000);
    const html = await page.$eval('h1', elem => {
      return elem != null;
    });
    expect(html).toEqual(true);
  },
    100000
  );
});