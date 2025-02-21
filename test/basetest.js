const { DriverFactory } = require("../pages/driverfactory");

let driver;

before('Initialize webdriver', async ()=>{
    console.log("[Global hook] Initializing driver..");
    driver = await DriverFactory.createDriver();
});

const getDriver = () => {
    if (!driver) {
        throw new Error("WebDriver instance is not initialized!");
    }
    return driver;
};

module.exports = { getDriver };
 




