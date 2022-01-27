const { Builder, Capabilities, By } = require("selenium-webdriver") 

const chromedriver = require('chromedriver')

jest.setTimeout(30000)

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const CgiPage = require('./pageObject/cgi')

const myPage = new CgiPage(driver, 'https://www.cgi.com/en')

test("Page Object Practice", async () =>{
    await myPage.navToHome()

})