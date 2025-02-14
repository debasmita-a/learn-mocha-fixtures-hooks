const {Builder, Browser} = require('selenium-webdriver');
const {config} = require('../common/config');

class DriverManager{

    async init_driver(browserName){
        browserName = config.browser;
        let driver = await new Builder().forBrowser(Browser.CHROME).build();
        driver.get(config.url);
    }
}

exports.DriverManager = DriverManager