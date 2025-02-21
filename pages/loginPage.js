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
        return await this.driver.findElement(this.#appHeaderText).getText();
    }

    async enterUserEmail(email){
        await this.driver.findElement(this.#email).sendKeys(email);
    }

    async enteruserPassword(pass){
        await this.driver.findElement(this.#password).sendKeys(pass);
    }

    async doLogin(){
        await this.driver.findElement(this.#submitBtn).click();
    }

    async navigateToSignupPage(){
        await this.driver.findElement(this.#signupBtn).click();
    }

    async getErrorMessage(){
        return await this.driver.findElement(this.#errorMsg).getText();
    }

}

exports.LoginPage = LoginPage