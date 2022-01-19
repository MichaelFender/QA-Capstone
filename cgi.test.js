const { Builder, Capabilities, By } = require("selenium-webdriver") 

require('chromedriver')

jest.setTimeout(30000)

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()


/////////////////////////
//Services
/////////////////////////
test("CGI-Services", async () => {
  
    await driver.get('https://cgi.com/')

    driver.manage().window().maximize();
    //^^ to maximize screen

    //=>
    let cookie = await driver.findElement(By.css('#popup-buttons > button.decline-button.eu-cookie-compliance-secondary-button'))

    await cookie.click()
    //<= ^^ one time cookie decline

    let services = await driver.findElement(By.xpath('/html/body/header/div/div[3]/div/nav/ul/li[1]/a'))

    await services.click()
    // => Back to homepage
    // let home = await driver.findElement(By.css('#Calque_1'))

    // await home.click()
    // <= ^^
})    


/////////////////////////
//Industries
/////////////////////////
test("CGI-Industries", async () => {
  
    // await driver.get('https://cgi.com/')

    // driver.manage().window().maximize();


    let industries = await driver.findElement(By.xpath('//*[@id="main-nav"]/div/nav/ul/li[2]/a'))

    await industries.click()

    // => Back to homepage
    // let home = await driver.findElement(By.css('#Calque_1'))

    // await home.click()
    // <= ^^
})    


/////////////////////////
//Insights
/////////////////////////
test("CGI-Insights", async () => {
  
    // await driver.get('https://cgi.com/')

    // driver.manage().window().maximize();

    let insights = await driver.findElement(By.xpath('/html/body/header/div/div[3]/div/nav/ul/li[3]/a'))

    await insights.click()

    // => Back to homepage
    // let home = await driver.findElement(By.css('#Calque_1'))

    // await home.click()
    // <= ^^
})    

/////////////////////////
//Insights
/////////////////////////
test("CGI-Insights", async () => {
  
    // await driver.get('https://cgi.com/')

    // driver.manage().window().maximize();

    let insights = await driver.findElement(By.xpath('/html/body/header/div/div[3]/div/nav/ul/li[3]/a'))

    await insights.click()

    // => Back to homepage
    // let home = await driver.findElement(By.css('#Calque_1'))

    // await home.click()
    // <= ^^
})    

/////////////////////////
//Careers
/////////////////////////
test("CGI-Careers", async () => {
  
    // await driver.get('https://cgi.com/')

    // driver.manage().window().maximize();

    let careers = await driver.findElement(By.xpath('/html/body/header/div/div[3]/div/nav/ul/li[4]/a'))

    await careers.click()

    // => Back to homepage
    // let home = await driver.findElement(By.css('#Calque_1'))

    // await home.click()
    // <= ^^
}) 

/////////////////////////
//Mergers
/////////////////////////
test("CGI-Mergers", async () => {
  
    // await driver.get('https://cgi.com/')

    // driver.manage().window().maximize();

    let mergers = await driver.findElement(By.xpath('/html/body/header/div/div[3]/div/nav/ul/li[5]/a'))

    await mergers.click()

    // => Back to homepage
    // let home = await driver.findElement(By.css('#Calque_1'))

    // await home.click()
    // <= ^^
}) 

/////////////////////////
//Contact
/////////////////////////
test("CGI-Contact", async () => {
  
    // await driver.get('https://cgi.com/')

    // driver.manage().window().maximize();

    let contact = await driver.findElement(By.xpath('/html/body/header/div/div[4]/div/nav/div[1]/a'))

    await contact.click()

    // => Back to homepage
    let home = await driver.findElement(By.css('#Calque_1'))

    await home.click()
    // <= ^^
}) 

/////////////////////////
//Global
/////////////////////////
test("CGI-Global", async () => {
  
    // await driver.get('https://cgi.com/')

    // driver.manage().window().maximize();

    let global = await driver.findElement(By.xpath('/html/body/header/div/div[4]/div/nav/div[2]/a'))

    await global.click()

    // => Back to homepage
    let home = await driver.findElement(By.css('#Calque_1'))

    await home.click()
    // <= ^^
}) 

/////////////////////////
//About Us Video
/////////////////////////
test("CGI-About Us Video", async () => {
  
    // await driver.get('https://cgi.com/')

    // driver.manage().window().maximize();

    let aboutUs = await driver.findElement(By.css('#movie_player > div.ytp-cued-thumbnail-overlay > div'))

    await aboutUs.click()

    // let aboutUsVideo = await driver.findElement(By.xpath('//*[@id="js-pjax-container"]/div[2]/div/div[1]/div/div[2]/div[3]/div[1]/form/div[7]/button[1]'))

    // await aboutUsVideo.click()

    // => Back to homepage
    // let home = await driver.findElement(By.css('#Calque_1'))

    // await home.click()
    // <= ^^
}) 
//npx jest github.test.js
