const {By, WebDriver, until} = require('selenium-webdriver');

class MyContactsPage {

    constructor(driver){
        /** @type {WebDriver | null} */
        this.driver = driver;
    }

    #logoutBtn = By.id("logout");
    #addContactBtn = By.id("add-contact");

    async getMyContactsPageTitle(){
        return await this.driver.wait(until.titleIs("My Contacts"));
    }

    async isLogoutBtnAvailable(){
        return await this.driver.wait(until.elementLocated(this.#logoutBtn)).isDisplayed();
    }

    async clickLogoutBtn(){
        return await this.driver.wait(until.elementLocated(this.#logoutBtn)).click();
    }

    async clickAddNewContactBtn(){
        await this.driver.findElement(this.#addContactBtn).click();
    }
}

exports.MyContactsPage = MyContactsPage;