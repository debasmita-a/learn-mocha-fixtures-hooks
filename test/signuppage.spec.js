const {SignUpPage}  = require("../pages/signupPage");
const {MyContactsPage} = require('../pages/mycontactsPage');
const {LoginPage} = require('../pages/loginPage');
const {expect} = require('chai');
const { getDriver } = require("./basetest");
const { generateUserData } = require("../common/userData");

describe("SignUp page test suite", () => {
  let driver;
  let signupPage;
  let myContactsPage;
  let loginPage, userData;

    beforeEach('Initialize Signup page instance', async ()=>{
        driver = getDriver();
        signupPage = new SignUpPage(driver);
        loginPage = new LoginPage(driver);      
        myContactsPage = new MyContactsPage(driver);
        userData = generateUserData();
    })
  //FIXME : All tests should be independent
    it('Verify Sign up page title', async()=>{      
        await loginPage.navigateToSignupPage();
        let addUsertitle = await signupPage.verifySignupPageTitle();
        expect(addUsertitle).equals("Add User");
    });

    it('Add user test', async()=>{
       // await loginPage.navigateToSignupPage();
        await signupPage.enterfirstname(userData.firstName);
        await signupPage.enterlastname(userData.lastName);
        await signupPage.enteremail(userData.email);
        await signupPage.enterpassword(userData.password);
        await signupPage.clickSubmitBtn();
        expect(await myContactsPage.getMyContactsPageTitle());
        expect(await myContactsPage.isLogoutBtnAvailable());
        await myContactsPage.clickLogoutBtn();
    });

    it('Sign up and do Logout', async ()=>{
        await loginPage.navigateToSignupPage();
        await signupPage.enterfirstname(userData.firstName);
        await signupPage.enterlastname(userData.lastName);
        await signupPage.enteremail(userData.email);
        await signupPage.enterpassword(userData.password);
        await signupPage.clickSubmitBtn();
        await myContactsPage.clickLogoutBtn();
        expect(await loginPage.getLoginPageTitle());
    })
});
