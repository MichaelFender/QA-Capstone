const { Builder, Capabilities, By } = require("selenium-webdriver") 

require('chromedriver')

jest.setTimeout(30000)

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const region = "united states"
//^^ this string can be changed to another region- the variable is used in the Search By Region test

/////////////////////////
//Topics
/////////////////////////
test("JHCRC-Topics", async () => {
  
    await driver.get('https://coronavirus.jhu.edu/')

    driver.manage().window().maximize();
    //^^ to maximize screen

    let topics = await driver.findElement(By.xpath('/html/body/div[1]/div/header/div/div[2]/ul/li[2]/div/div/span'))

    await topics.click()
    await driver.sleep(3000)

})    


/////////////////////////
//Region
/////////////////////////
test("JHCRC-Region", async () => {

    let region = await driver.findElement(By.xpath('/html/body/div[1]/div/header/div/div[2]/ul/li[3]/a'))

    await region.click()
    await driver.sleep(3000)

})    


/////////////////////////
//Events & News
/////////////////////////
test("JHCRC-Events & News", async () => {


    let eventsAndNews = await driver.findElement(By.xpath('/html/body/div[1]/div/header/div/div[2]/ul/li[4]/a'))

    await eventsAndNews.click()
    await driver.sleep(3000)
})    


/////////////////////////
//About
/////////////////////////
test("JHCRC-About", async () => {


    let about = await driver.findElement(By.xpath('/html/body/div[1]/div/header/div[1]/div[2]/ul/li[5]/a'))

    await about.click()
    await driver.sleep(3000)

        // => Back to homepage
    let home = await driver.findElement(By.xpath('/html/body/div[1]/div/header/div[1]/a/img'))

    await home.click()
    await driver.sleep(1000)
    // <= ^^

}) 

/////////////////////////
//Global Map
/////////////////////////
test("JHCRC-Global Map", async () => {


    let globalMap = await driver.findElement(By.xpath('/html/body/div[1]/div/div[2]/div[1]/div/div[1]/article/ul/li[5]/a[1]'))

    await globalMap.click()
    await driver.sleep(15000)

    // => Back to homepage
    let home = await driver.findElement(By.xpath('/html/body/div[1]/div/header/div[1]/a/img'))

    await home.click()
    await driver.sleep(1000)
    // <= ^^
}) 

/////////////////////////
//U.S. Map
/////////////////////////
test("JHCRC-U.S. Map", async () => {

    let usMap = await driver.findElement(By.xpath('/html/body/div[1]/div/div[2]/div[1]/div/div[1]/article/ul/li[5]/a[2]'))

    await usMap.click()
    await driver.sleep(15000)

    // => Back to homepage
    let home = await driver.findElement(By.xpath('/html/body/div[1]/div/header/div[1]/a/img'))

    await home.click()
    await driver.sleep(1000)
    // <= ^^
}) 

/////////////////////////
//Vaccines
/////////////////////////
test("JHCRC-Vaccines", async () => {

    let vaccines = await driver.findElement(By.xpath('/html/body/div[1]/div/div[2]/div[3]/a/div/div/h2'))

    await vaccines.click()
    await driver.sleep(3000)

    // => Back to homepage
    let home = await driver.findElement(By.xpath('/html/body/div[1]/div/header/div[1]/a/img'))

    await home.click()
    await driver.sleep(1000)
    // <= ^^
}) 

/////////////////////////
//PANDEMIC DATA INITIATIVE
/////////////////////////
test("JHCRC-Pandemic Data Initiative", async () => {

    let pandemicDataInitiative = await driver.findElement(By.xpath('/html/body/div[1]/div/div[2]/div[5]/a/div/div/h2'))

    await pandemicDataInitiative.click()
    await driver.sleep(3000)

    // => Back to homepage
    let home = await driver.findElement(By.xpath('/html/body/div[1]/div/header/div[1]/a/img'))

    await home.click()
    await driver.sleep(1000)
    // <= ^^

}) 


/////////////////////////
//Tracking
/////////////////////////
test("JHCRC-Tracking", async () => {


    let tracking = await driver.findElement(By.xpath('/html/body/div[1]/div/div[2]/div[7]/a/div/div/h2'))

    await tracking.click()
    await driver.sleep(3000)

    // => Back to homepage
    let home = await driver.findElement(By.xpath('/html/body/div[1]/div/header/div[1]/a/img'))

    await home.click()
    await driver.sleep(1000)
    // <= ^^
}) 

/////////////////////////
//Search Bar Data by Region 
/////////////////////////
test("JHCRC-Search By Region", async () => {


    let searchBar = await driver.findElement(By.xpath('/html/body/div[1]/div/header/div/div[2]/ul/li[6]/div/div[1]/form/input'))
    await searchBar.sendKeys(region)
    //sends a string, that is assigned to the variable "region", to the searchbar
 
   
    let submitSearch = await driver.findElement(By.xpath('/html/body/div[1]/div/header/div/div[2]/ul/li[6]/div/div[1]/form/button/img'))
    await submitSearch.click()
    await driver.sleep(4000)

    await driver.get('https://coronavirus.jhu.edu/')
    //^^ refresh page

    driver.manage().window().maximize();
    //^^ to maximize screen

    driver.quit()

}) 

//start test with the following code
//npx jest jhcrc.test.js
