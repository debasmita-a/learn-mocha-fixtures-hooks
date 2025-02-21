const {SignUpPage}  = require("../pages/signupPage");
const {MyContactsPage} = require('../pages/mycontactsPage');
const {LoginPage} = require('../pages/loginPage');
const {expect} = require('chai');
const { getDriver } = require("./basetest");
const { generateUserData } = require("../common/userData");

describe("SignUp page test suite", () => {
  let driver;
  let signupPage;
  let mycontactsPage;
  let loginPage, userData;

    beforeEach('Initialize Signup page instance', async ()=>{
        driver = getDriver();
        signupPage = new SignUpPage(driver);
        loginPage = new LoginPage(driver);      
        mycontactsPage = new MyContactsPage(driver);
        userData = generateUserData();
    })
  
    it('Verify Sign up page title', async()=>{      
        await signupPage.navigateToSignupPage();
        let addUsertitle = await signupPage.verifySignupPageTitle();
        expect(addUsertitle).equals("Add User");
    });

    it('Add user test', async()=>{
        await signupPage.navigateToSignupPage();
        await signupPage.enterfirstname(userData.firstName);
        await signupPage.enterlastname(userData.lastName);
        await signupPage.enteremail(userData.email);
        await signupPage.enterpassword(userData.password);
        await signupPage.clickSubmitBtn();
        expect(await mycontactsPage.getMyContactsPageTitle());
        expect(await mycontactsPage.isLogoutBtnAvailable());
    });

    it('Sign up and do Logout', async ()=>{
        await signupPage.navigateToSignupPage();
        await signupPage.enterfirstname(userData.firstName);
        await signupPage.enterlastname(userData.lastName);
        await signupPage.enteremail(userData.email);
        await signupPage.enterpassword(userData.password);
        await signupPage.clickSubmitBtn();
        await mycontactsPage.clickLogoutBtn();
        expect(await loginPage.getLoginPageTitle());
    })
});
