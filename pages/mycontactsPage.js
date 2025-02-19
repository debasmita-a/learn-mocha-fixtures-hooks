const {By, WebDriver, until} = require('selenium-webdriver');
const {DriverFactory} = require('../pages/driverfactory');

class MyContactsPage {

    constructor(driver){
        /** @type {WebDriver | null} */
        this.driver = driver;
    }

    #logoutBtn = By.id("logout");

    async getMyContactsPageTitle(){
        return await this.driver.wait(until.titleIs("My Contacts"));
    }

    async isLogoutBtnAvailable(){
        return await this.driver.wait(until.elementLocated(this.#logoutBtn)).isDisplayed();
    }
}

exports.MyContactsPage = MyContactsPage;