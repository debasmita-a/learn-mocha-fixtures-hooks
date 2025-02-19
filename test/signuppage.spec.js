const {SignUpPage}  = require("../pages/signupPage");
const {DriverFactory}  = require("../pages/driverfactory");
const {MyContactsPage} = require('../pages/mycontactsPage')
const {expect} = require('chai');

describe("SignUp page test suite", () => {
  let driver;
  let signupPage;
  let mycontactsPage;

  before(
    "Initialize driver and pass driver to signupPage object",
    async () => {
        driver = await DriverFactory.createDriver();
        signupPage = new SignUpPage(driver);
        mycontactsPage = new MyContactsPage(driver);
    });
  
    it('Verify Sign up page title', async()=>{      
        await signupPage.navigateToSignupPage();
        let addUsertitle = await signupPage.verifySignupPageTitle();
        expect(addUsertitle).equals("Add User");
    });

    it('Add user test', async()=>{
        await signupPage.enterfirstname("Curran");
        await signupPage.enterlastname("Lennert");
        await signupPage.enteremail("curran.ert@gmail.com");
        await signupPage.enterpassword("Test@123");
        await signupPage.clickSubmitBtn();
        expect(await mycontactsPage.getMyContactsPageTitle());
        expect(await mycontactsPage.isLogoutBtnAvailable());
    })
});
