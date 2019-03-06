# Puppeteer-select

at this point its just proof of concept made for solving my own issue. 
Feel free to add any suggestions 

## Why

I got used to some useful css selectors which are not supported by puppeteer like:
```
:contains(text)
```

example from puppeteer docks modified to be using puppeteer-selector

```javascript
const puppeteer = require('puppeteer');
const select = require ('puppeteer-select');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  
  await select(page).assertElementPresent('div.Tag:contains(Events) > button');
  const element = await select(page).getElement('div.Tag:contains(Events) > button');
  await element.click()

  await browser.close();
})();
```

this lib is using "sizzle"
all available selectors is here https://github.com/jquery/sizzle/wiki#selectors
