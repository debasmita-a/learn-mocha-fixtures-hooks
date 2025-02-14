const { describe, before, it } = require('mocha');
const {DriverManager} = require('../pages/initdriver');
const driver = new DriverManager();

    before('Initializes the driver', async ()=>{
        console.log("Before hook");
        await driver.init_driver("chrome");
    })

    after(async()=>{
        console.log("After hook");
        await this.driver.quit();
    })


