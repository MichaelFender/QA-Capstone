const { Builder, Capabilities, By } = require("selenium-webdriver") 

require('chromedriver')

jest.setTimeout(30000)

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

test("CGI-Services", async () => {
  
    await driver.get('https://cgi.com/')

    driver.manage().window().maximize();


    let cookie = await driver.findElement(By.css('#popup-buttons > button.decline-button.eu-cookie-compliance-secondary-button'))

    await cookie.click()

    let services = await driver.findElement(By.xpath('/html/body/header/div/div[3]/div/nav/ul/li[1]/a'))

    await services.click()

    let home = await driver.findElement(By.css('#Calque_1'))

    await home.click()
})    

test("CGI-Industries", async () => {
  
    await driver.get('https://cgi.com/')

    driver.manage().window().maximize();


    let industries = await driver.findElement(By.xpath('//*[@id="main-nav"]/div/nav/ul/li[2]/a'))

    await industries.click()

    let home = await driver.findElement(By.css('#Calque_1'))

    await home.click()
})    

test("CGI-Insights", async () => {
  
    await driver.get('https://cgi.com/')

    driver.manage().window().maximize();


    let insights = await driver.findElement(By.xpath('/html/body/header/div/div[3]/div/nav/ul/li[3]/a'))

    await insights.click()

    let home = await driver.findElement(By.css('#Calque_1'))

    await home.click()
})    

//npx jest github.test.js
