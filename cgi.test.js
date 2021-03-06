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
    await driver.sleep(5000)
    await cookie.click()
    
    //<= ^^ one time cookie decline

    let services = await driver.findElement(By.xpath('/html/body/header/div/div[3]/div/nav/ul/li[1]/a'))

    await services.click()
    await driver.sleep(3000)

})    


/////////////////////////
//Industries
/////////////////////////
test("CGI-Industries", async () => {
  
    let industries = await driver.findElement(By.xpath('//*[@id="main-nav"]/div/nav/ul/li[2]/a'))

    await industries.click()
    await driver.sleep(3000)

})    


/////////////////////////
//Insights
/////////////////////////
test("CGI-Insights", async () => {

    let insights = await driver.findElement(By.xpath('/html/body/header/div/div[3]/div/nav/ul/li[3]/a'))

    await insights.click()
    await driver.sleep(3000)

})    


/////////////////////////
//Careers
/////////////////////////
test("CGI-Careers", async () => {

    let careers = await driver.findElement(By.xpath('/html/body/header/div/div[3]/div/nav/ul/li[4]/a'))

    await careers.click()
    await driver.sleep(3000)

}) 

/////////////////////////
//Mergers
/////////////////////////
test("CGI-Mergers", async () => {


    let mergers = await driver.findElement(By.xpath('/html/body/header/div/div[3]/div/nav/ul/li[5]/a'))

    await mergers.click()
    await driver.sleep(3000)

}) 

/////////////////////////
//Contact
/////////////////////////
test("CGI-Contact", async () => {
  
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

    let global = await driver.findElement(By.xpath('/html/body/header/div/div[4]/div/nav/div[2]/a'))

    await global.click()
    

    // => Back to homepage
    let home = await driver.findElement(By.css('#Calque_1'))

    await home.click()
    await driver.sleep(1000)
    // <= ^^
}) 


/////////////////////////
//Client Stories
/////////////////////////
test("CGI-Client Stories", async () => {
  
    let clientStories = await driver.findElement(By.xpath('/html/body/div[3]/div/div[2]/div/section/div/div/div/section[2]/div/h2/a'))

    await clientStories.click()
    await driver.sleep(3000)

    // => Back to homepage
    let home = await driver.findElement(By.css('#Calque_1'))

    await home.click()
    // <= ^^
    
}) 

/////////////////////////
//About Us Video
/////////////////////////
test("CGI-About Us Video", async () => {

    let aboutUs = await driver.findElement(By.xpath('/html/body/div[3]/div/footer/div/div/div[2]/div/div/div[3]/div/nav/ul/li[1]/a'))

    await aboutUs.click()
    await driver.sleep(3000)

    await driver.switchTo().frame(0)
    ///^^to be able to click into embedded YouTube video
    await driver.findElement(By.css(".ytp-large-play-button")).click()
    await driver.sleep(5000)

    // => Back to homepage
    await driver.switchTo().defaultContent()
    //^^ To switch back out of embedded Youtube video
    await driver.findElement(By.id("Calque_1")).click()
        // <= ^^
    driver.quit()
}) 



//start test with following code 
//npx jest cgi.test.js
