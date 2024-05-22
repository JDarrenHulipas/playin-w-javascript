const { Builder, Browser, By, Key, until } = require("selenium-webdriver");

(async function example() {
  let driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  const webdriver = require("selenium-webdriver");
  /**
   * Chrome tab
   */
  const chrome = require("selenium-webdriver/chrome");
/**
 * Firefox tab
 */
  const firefox = require("selenium-webdriver/firefox");
  try {
    await driver.get("https://www.wiris.com/en/");

    //await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);

    //await driver.wait(until.titleIs("webdriver - Google Search"), 1000);
  } finally {
    await driver.quit();
  }
})();
