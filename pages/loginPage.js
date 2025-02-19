const {By, WebDriver, until} = require('selenium-webdriver');

class LoginPage{
    constructor(driver){
/** @type {WebDriver | null} */
        this.driver = driver;
    }

    #email = By.id("email");
    #password = By.id("password");
    #singupBtn = By.id("submit");

    async getLoginPageTitle(){
        return await this.driver.wait(until.titleContains("Contact List App"));
    }

}

exports.LoginPage = LoginPage