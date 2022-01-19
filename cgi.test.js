const { Builder, Capabilities, By } = require("selenium-webdriver") 

require('chromedriver')

jest.setTimeout(30000)

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

test("CGI", async () => {
  
    await driver.get('https://cgi.com/')

    driver.manage().window().maximize();


    let cookie = await driver.findElement(By.css('#popup-buttons > button.decline-button.eu-cookie-compliance-secondary-button'))

    await cookie.click()

    let hub = await driver.findElement(By.xpath('/html/body/header/div/div[3]/div/nav/ul/li[1]/a'))

    await hub.click()

    let home = await driver.findElement(By.css('#Calque_1'))

    await home.click()

    // await driver.sleep(5000)
})    

//npx jest github.test.js
