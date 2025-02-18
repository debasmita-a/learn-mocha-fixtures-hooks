const {Builder, Browser, WebDriver } = require('selenium-webdriver');
const { config } = require('../common/config');

class DriverManager{

  /** @type {WebDriver | null} */
    driver = null;

    async getDriver(){  

        try {
            if(config.browser === "chrome"){
                this.driver = await new Builder().forBrowser(Browser.CHROME).build();
            }else if(config.browser === "edge"){
                this.driver = await new Builder().forBrowser(Browser.EDGE).build();
            }
            this.driver.get(config.url);
            this.driver.manage().window().maximize();
        } finally{
//TODO : Clean up code here..
        }
        return this.driver;
    }
}

exports.DriverManager = DriverManager;