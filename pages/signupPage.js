const { By, WebDriver, until } = require('selenium-webdriver');

class SignUpPage{

  constructor(driver){
     /** @type {WebDriver | null} */
    this.driver = driver;
  }

  #signupBtn = By.id("signup");
  #firstname = By.id("firstName");
  #lastname = By.id("lastName");
  #email = By.id("email");
  #password = By.id("password");
  #submitBtn = By.id("submit");

  async verifySignupPageTitle(){
    return await this.driver.getTitle();
  }

  async enterfirstname(fname){
    await this.driver.wait(until.elementLocated(this.#firstname), 3000).sendKeys(fname);
    return this;
  }

  async enterlastname(lname){
    await this.driver.findElement(this.#lastname).sendKeys(lname);
    return this;
  }

  async enteremail(email){
    await this.driver.findElement(this.#email).sendKeys(email);
    return this;
  }

  async enterpassword(pass){
    await this.driver.findElement(this.#password).sendKeys(pass);
    return this;
  }

  async clickSubmitBtn(){
    await this.driver.findElement(this.#submitBtn).click();
    return this;
  }

}

exports.SignUpPage = SignUpPage;
//module.exports = SignUpPage;