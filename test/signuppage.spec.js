const {SignUpPage}  = require("../pages/signupPage");
const {DriverFactory}  = require("../pages/driverfactory");
const {MyContactsPage} = require('../pages/mycontactsPage');
const {LoginPage} = require('../pages/loginPage');
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
        await signupPage.enterfirstname("Curran");
        await signupPage.enterlastname("Lennert");
        await signupPage.enteremail("curran.er123@gmail.com");
        await signupPage.enterpassword("Test@123");
        await signupPage.clickSubmitBtn();
        expect(await mycontactsPage.getMyContactsPageTitle());
        expect(await mycontactsPage.isLogoutBtnAvailable());
    });

    it('Sign up and do Logout', async ()=>{
        await signupPage.navigateToSignupPage();
        await signupPage.enterfirstname("Curran");
        await signupPage.enterlastname("Lennert");
        await signupPage.enteremail("curran.rt1@gmail.com");
        await signupPage.enterpassword("Test@123");
        await signupPage.clickSubmitBtn();
        await mycontactsPage.clickLogoutBtn();
        expect(await loginPage.getLoginPageTitle());
    })
});
