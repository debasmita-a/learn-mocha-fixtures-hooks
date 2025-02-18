const { WebDriver, By } = require("selenium-webdriver");
const { DriverManager } = require("./initDriver");

class SignUpPage {
  /**
   * @type {WebDriver | null}
   */
  driver = null;

  /**
   * @type {DriverManager}
   */
  constructor(driver) {
    this.driver = new DriverManager().getDriver();
  }

  async someMethod(){
    console.log("................");
  }
}

exports.SignUpPage = SignUpPage;

let s = new SignUpPage();
s.someMethod();
