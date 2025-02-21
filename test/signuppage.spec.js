const {SignUpPage}  = require("../pages/signupPage");
const {DriverFactory}  = require("../pages/driverfactory");
const {MyContactsPage} = require('../pages/mycontactsPage');
const {LoginPage} = require('../pages/loginPage');
const {faker} = require('@faker-js/faker');
const {expect} = require('chai');
const exp = require("constants");

describe("SignUp page test suite", () => {
  let driver;
  let signupPage;
  let mycontactsPage;
  let loginPage;

  before(
    "Initialize driver and pass driver to signupPage object",
    async () => {
//TODO : Before steps.
      
    });

    beforeEach('Initialize Signup page instance', async ()=>{
        driver = await DriverFactory.createDriver();
        signupPage = new SignUpPage(driver);
        loginPage = new LoginPage(driver);      
        mycontactsPage = new MyContactsPage(driver);
    })
  
    it('Verify Sign up page title', async()=>{      
        await signupPage.navigateToSignupPage();
        let addUsertitle = await signupPage.verifySignupPageTitle();
        expect(addUsertitle).equals("Add User");
    });

    it('Add user test', async()=>{
        await signupPage.navigateToSignupPage();
        await signupPage.enterfirstname(faker.person.firstName());
        await signupPage.enterlastname(faker.person.lastName());
        await signupPage.enteremail(faker.internet.email());
        await signupPage.enterpassword(faker.internet.password());
        await signupPage.clickSubmitBtn();
        expect(await mycontactsPage.getMyContactsPageTitle());
        expect(await mycontactsPage.isLogoutBtnAvailable());
    });

    it('Sign up and do Logout', async ()=>{
        await signupPage.navigateToSignupPage();
        await signupPage.enterfirstname(faker.person.firstName());
        await signupPage.enterlastname(faker.person.lastName());
        await signupPage.enteremail(faker.internet.email());
        await signupPage.enterpassword(faker.internet.password());
        await signupPage.clickSubmitBtn();
        await mycontactsPage.clickLogoutBtn();
        expect(await loginPage.getLoginPageTitle());
    })
});
