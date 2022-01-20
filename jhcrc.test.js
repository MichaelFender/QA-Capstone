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

/////////////////////////
//Vaccines
/////////////////////////
test("JHCRC-Vaccines", async () => {

    let vaccines = await driver.findElement(By.xpath('/html/body/div[1]/div/div[2]/div[3]/a/div/div/h2'))

    await vaccines.click()

    // => Back to homepage
    let home = await driver.findElement(By.xpath('/html/body/div[1]/div/header/div[1]/a/img'))

    await home.click()
    // <= ^^
}) 

/////////////////////////
//PANDEMIC DATA INITIATIVE
/////////////////////////
test("JHCRC-Pandemic Data Initiative", async () => {

    let pandemicDataInitiative = await driver.findElement(By.xpath('/html/body/div[1]/div/div[2]/div[5]/a/div/div/h2'))

    await pandemicDataInitiative.click()

    // => Back to homepage
    let home = await driver.findElement(By.xpath('/html/body/div[1]/div/header/div[1]/a/img'))

    await home.click()
    // <= ^^

}) 


/////////////////////////
//Tracking
/////////////////////////
test("JHCRC-Tracking", async () => {


    let tracking = await driver.findElement(By.xpath('/html/body/div[1]/div/div[2]/div[7]/a/div/div/h2'))

    await tracking.click()

    // => Back to homepage
    let home = await driver.findElement(By.xpath('/html/body/div[1]/div/header/div[1]/a/img'))

    await home.click()
    // <= ^^
}) 

//npx jest jhcrc.test.js
