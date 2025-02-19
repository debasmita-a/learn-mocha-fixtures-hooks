const {Builder, Browser} = require('selenium-webdriver');
const {config} = require('../common/config');

class DriverFactory{

    /** @type {WebDriver | null} */
    driver = null;

    static async createDriver(){
        console.log("Launching browser " + config.browser);
        if(config.browser === "chrome"){
            this.driver = await new Builder().forBrowser(Browser.CHROME).build();
        }else if(config.browser === "edge"){
            this.driver = await new Builder().forBrowser(Browser.EDGE).build();
        }else{
            //throws error
        }

        this.driver.get(config.url);
        this.driver.manage().window().maximize();
        return this.driver;
    }
}

exports.DriverFactory = DriverFactory;
//module.exports = DriverFactory;