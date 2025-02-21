const {SignUpPage}  = require("../pages/signupPage");
const {DriverFactory}  = require("../pages/driverfactory");
const {MyContactsPage} = require('../pages/mycontactsPage');
const {LoginPage} = require('../pages/loginPage');
const {faker} = require('@faker-js/faker');
const {expect} = require('chai');
const exp = require("constants");
const userData = require("../common/userData");

describe('Login Page test suite', ()=>{
    let driver, loginPage, myContactsPage, signupPage;

    beforeEach('Runs before each tests', async ()=>{
        //FIXME : Figure out a way to initialize the driver just once and launch the browser per test file, not for each test 
        driver = await DriverFactory.createDriver();
        loginPage = new LoginPage(driver);
        myContactsPage = new MyContactsPage(driver);
        signupPage = new SignUpPage(driver);
    });

    it('Verify App Header text', async ()=>{
        let header = await loginPage.getAppHeader();
        expect(header).to.eq("Contact List App");
    });

    it('Verify LoginPage title', async ()=>{
        let title = await loginPage.getLoginPageTitle();
        expect(title).to.eq("Contact List App");
    });

    it('Verify user logs in successfully with correct username and password', async()=>{
        //TODO : Figure out how to shorten the below test
        //Step -0 : Store the test data in some variable
        let firstName = userData.firstName;
        let lastName = userData.lastName;
        let email = userData.email;
        let password = userData.password;
        //Step -1 : Sign up with faker library user data
        await signupPage.enterfirstname(firstName);
        await signupPage.enterlastname(lastName);
        await signupPage.enteremail(email);
        await signupPage.enterpassword(password);
        await signupPage.clickSubmitBtn();
        //Step -2 : Sign out/Log out
        await myContactsPage.clickLogoutBtn();
        //Step -3 : Log in with same faker library user data
        await loginPage.enterUserEmail(email);
        await loginPage.enteruserPassword(password);
        await loginPage.doLogin();
        let title = await myContactsPage.getMyContactsPageTitle();
        expect(title).to.eq("My Contacts Page");
    });

    it('Verify user logs in unsuccessfully with incorrect username and password', async()=>{
    //TODO : Figure out a way to pass incorrect data    
    });

    it('Verify user logs in unsuccessfully with correct username and incorrect password', async()=>{
    //TODO : Figure out a way to pass incorrect data   
    });
})