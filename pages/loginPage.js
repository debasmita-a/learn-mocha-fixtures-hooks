const {By, WebDriver, until} = require('selenium-webdriver');

class LoginPage{
    constructor(driver){
/** @type {WebDriver | null} */
        this.driver = driver;
    }

    #email = By.id("email");
    #password = By.id("password");
    #submitBtn = By.id("submit");
    #signupBtn = By.id('signup');
    #appHeaderText = By.xpath("//h1");
    #errorMsg = By.id("error");

    async getLoginPageTitle(){
        return await this.driver.wait(until.titleContains("Contact List App"));
    }

    async getAppHeader(){
        return await this.driver.wait(until.elementLocated(this.#appHeaderText), 2000).getText();
    }

    async enterUserEmail(email){
        await this.driver.wait(until.elementLocated(this.#email), 3000).sendKeys(email);
    }

    async enteruserPassword(pass){
        await this.driver.wait(until.elementLocated(this.#password), 3000).sendKeys(pass);
    }

    async doLogin(){
        await this.driver.wait(until.elementLocated(this.#submitBtn), 2000).click();
    }

    async navigateToSignupPage(){
        await this.driver.wait(until.elementLocated(this.#signupBtn), 2000).click();
    }

    async getErrorMessage(){
        return await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.#errorMsg)), 2000).getText();
    }

}

exports.LoginPage = LoginPage