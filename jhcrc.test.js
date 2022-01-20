const { Builder, Capabilities, By } = require("selenium-webdriver") 

require('chromedriver')

jest.setTimeout(30000)

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

/////////////////////////
//Topics
/////////////////////////
test("JHCRC-Topics", async () => {
  
    await driver.get('https://coronavirus.jhu.edu/')

    driver.manage().window().maximize();
    //^^ to maximize screen

    let topics = await driver.findElement(By.xpath('/html/body/div[1]/div/header/div/div[2]/ul/li[2]/div/div/span'))

    await topics.click()

})    


/////////////////////////
//Region
/////////////////////////
test("JHCRC-Region", async () => {

    let region = await driver.findElement(By.xpath('/html/body/div[1]/div/header/div/div[2]/ul/li[3]/a'))

    await region.click()

})    


/////////////////////////
//Events & News
/////////////////////////
test("JHCRC-Events & News", async () => {


    let eventsAndNews = await driver.findElement(By.xpath('/html/body/div[1]/div/header/div/div[2]/ul/li[4]/a'))

    await eventsAndNews.click()
})    


/////////////////////////
//About
/////////////////////////
test("JHCRC-About", async () => {


    let about = await driver.findElement(By.xpath('/html/body/div[1]/div/header/div[1]/div[2]/ul/li[5]/a'))

    await about.click()

        // => Back to homepage
    let home = await driver.findElement(By.xpath('/html/body/div[1]/div/header/div[1]/a/img'))

    await home.click()
    // <= ^^

}) 

/////////////////////////
//Global Map
/////////////////////////
test("JHCRC-Global Map", async () => {


    let globalMap = await driver.findElement(By.xpath('/html/body/div[1]/div/div[2]/div[1]/div/div[1]/article/ul/li[5]/a[1]'))

    await globalMap.click()

    // => Back to homepage
    let home = await driver.findElement(By.xpath('/html/body/div[1]/div/header/div[1]/a/img'))

    await home.click()
    // <= ^^
}) 

/////////////////////////
//U.S. Map
/////////////////////////
test("JHCRC-U.S. Map", async () => {

    let usMap = await driver.findElement(By.xpath('/html/body/div[1]/div/div[2]/div[1]/div/div[1]/article/ul/li[5]/a[2]'))

    await usMap.click()

    // => Back to homepage
    let home = await driver.findElement(By.xpath('/html/body/div[1]/div/header/div[1]/a/img'))

    await home.click()
    // <= ^^
}) 

// /////////////////////////
// //Global
// /////////////////////////
// test("CGI-Global", async () => {
  
//     // await driver.get('https://cgi.com/')

//     // driver.manage().window().maximize();

//     let global = await driver.findElement(By.xpath('/html/body/header/div/div[4]/div/nav/div[2]/a'))

//     await global.click()

//     // => Back to homepage
//     let home = await driver.findElement(By.css('#Calque_1'))

//     await home.click()
//     // <= ^^
// }) 

// /////////////////////////
// //About Us Video
// /////////////////////////
// test("CGI-About Us Video", async () => {
  
//     // await driver.get('https://cgi.com/')

//     // driver.manage().window().maximize();

//     let aboutUs = await driver.findElement(By.xpath('/html/body/div[3]/div/footer/div/div/div[2]/div/div/div[3]/div/nav/ul/li[1]/a'))

//     await aboutUs.click()

//     await driver.switchTo().frame(0)
//     await driver.findElement(By.css(".ytp-large-play-button")).click()

//     // => Back to homepage
//     await driver.switchTo().defaultContent()
//     await driver.findElement(By.id("Calque_1")).click()
//     // <= ^^
// }) 


// /////////////////////////
// //Client Stories
// /////////////////////////
// test("CGI-Client Stories", async () => {
  
//     // await driver.get('https://cgi.com/')

//     // driver.manage().window().maximize();

//     let clientStories = await driver.findElement(By.xpath('/html/body/div[3]/div/div[2]/div/section/div/div/div/section[2]/div/h2/a'))

//     await clientStories.click()

//     // => Back to homepage
//     let home = await driver.findElement(By.css('#Calque_1'))

//     await home.click()
//     // <= ^^
// }) 

//npx jest jhcrc.test.js
