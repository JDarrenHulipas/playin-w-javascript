const { Builder, Browser, By, until } = require("selenium-webdriver");

(async function example() {
  let driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  const webdriver = require("selenium-webdriver");
  /**
   * Chrome tab
   */
  //const chrome = require("selenium-webdriver/chrome");
  /**
   * Firefox tab
   */
  const firefox = require("selenium-webdriver/firefox");
  //

  try {
    await driver.get("https://www.wiris.com/en/");

    let clickId = await driver.wait(
      until.elementLocated(By.id("onetrust-pc-btn-handler")),
      1000
    );
    await clickId.click();

    // Find the element by class name and click it
    let clickClassSave = await driver.findElement(
      By.className("save-preference-btn-handler")
    );
    await clickClassSave.click();

    let clickClassPum = await driver.findElement(
      By.className("pum-close popmake-close")
    );
    await clickClassPum.click();

    //await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);

    //await driver.wait(until.titleIs("webdriver - Google Search"), 1000);

    //js.executeScript("window.scrollBy(0,document.body.scrollHeight)");
    let clickIda = await driver.wait(
      until.elementLocated(By.id("onetrust-pc-btn-handler")),
      1000
    );
    await clickIda.click();
  } finally {
    await driver.quit();
  }
})();
