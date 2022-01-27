const { By } = require("selenium-webdriver");

module.exports = class MyCgi {
    driver;
    url;
    constructor(myDriver, myUrl){
        this.driver = myDriver
        this.url = myUrl
    }
    /*selectors*/

        cookie = By.css('#popup-buttons > button.decline-button.eu-cookie-compliance-secondary-button')
        services = By.xpath('/html/body/header/div/div[3]/div/nav/ul/li[1]/a')
        industries = By.xpath('//*[@id="main-nav"]/div/nav/ul/li[2]/a')
        insights = By.xpath('/html/body/header/div/div[3]/div/nav/ul/li[3]/a')
        careers = By.xpath('/html/body/header/div/div[3]/div/nav/ul/li[4]/a')
        mergers = By.xpath('/html/body/header/div/div[3]/div/nav/ul/li[5]/a')
        contact = By.xpath('/html/body/header/div/div[4]/div/nav/div[1]/a')
        home1 = By.id('#Calque_1')
        global = By.xpath('/html/body/header/div/div[4]/div/nav/div[2]/a')
        aboutUs = By.xpath('/html/body/div[3]/div/footer/div/div/div[2]/div/div/div[3]/div/nav/ul/li[1]/a')
        aboutUsVideo = By.css('.ytp-large-play-button')
        clientStories = By.xpath('/html/body/div[3]/div/div[2]/div/section/div/div/div/section[2]/div/h2/a')

        /* Methods */

        async navToHome() {
            await this.driver.get(this.url)

            await this.driver.wait(until.elementLocated(this.cookie))
        }






}