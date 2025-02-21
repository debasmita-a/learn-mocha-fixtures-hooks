const { SignUpPage } = require("../pages/signupPage");
const { DriverFactory } = require("../pages/driverfactory");
const { MyContactsPage } = require("../pages/mycontactsPage");
const { LoginPage } = require("../pages/loginPage");
const { expect } = require("chai");
const exp = require("constants");
const {generateUserData} = require("../common/userData");

describe("Login Page test suite", () => {
  let driver, loginPage, myContactsPage, signupPage, userData;

  beforeEach("Runs before each tests", async () => {
    //FIXME : Figure out a way to initialize the driver just once and launch the browser per test file, not for each test
    driver = await DriverFactory.createDriver();
    loginPage = new LoginPage(driver);
    myContactsPage = new MyContactsPage(driver);
    signupPage = new SignUpPage(driver);
    userData = generateUserData();
    console.log("Generated user test data :: " + userData);
  });

  it("Verify App Header text", async () => {
    let header = await loginPage.getAppHeader();
    expect(header).to.eq("Contact List App");
  });

  it("Verify LoginPage title", async () => {
    let title = await loginPage.getLoginPageTitle();
    expect(title).to.be.true;
  });

  it("Verify user logs in successfully with correct username and password", async () => {
    //TODO : Figure out how to shorten the below test

    //Step -1 : Sign up with faker library user data
    await loginPage.navigateToSignupPage();
    await signupPage.enterfirstname(userData.firstName);
    await signupPage.enterlastname(userData.lastName);
    await signupPage.enteremail(userData.email);
    await signupPage.enterpassword(userData.password);
    await signupPage.clickSubmitBtn();
    //Step -2 : Sign out/Log out
    await myContactsPage.clickLogoutBtn();
    //Step -3 : Log in with same faker library user data
    await loginPage.enterUserEmail(userData.email);
    await loginPage.enteruserPassword(userData.password);
    await loginPage.doLogin();
    let title = await myContactsPage.getMyContactsPageTitle();
    expect(title).to.be.true;
  });

  it("Verify user logs in unsuccessfully with incorrect username and password", async () => {
    await loginPage.navigateToSignupPage();
    await signupPage.enterfirstname(userData.firstName);
    await signupPage.enterlastname(userData.lastName);
    await signupPage.enteremail(userData.email);
    await signupPage.enterpassword(userData.password);
    await signupPage.clickSubmitBtn();
    await myContactsPage.clickLogoutBtn();
    //Step -3 : Log in with same faker library user data
    await loginPage.enterUserEmail(userData.email+"test");
    await loginPage.enteruserPassword(userData.password);
    await loginPage.doLogin();

    let errorMsg = await loginPage.getErrorMessage();
   expect(errorMsg).to.eq("Incorrect username or password");
   //expect(errorMsg).to.be.true;
  });

  it("Verify user logs in unsuccessfully with correct username and incorrect password", async () => {
    //Step -1 : Sign up with faker library user data
    await loginPage.navigateToSignupPage();
    await signupPage.enterfirstname(userData.firstName);
    await signupPage.enterlastname(userData.lastName);
    await signupPage.enteremail(userData.email);
    await signupPage.enterpassword(userData.password);
    await signupPage.clickSubmitBtn();
    await myContactsPage.clickLogoutBtn();
    //Step -3 : Log in with same faker library user data
    await loginPage.enterUserEmail(userData.email);
    await loginPage.enteruserPassword(userData.password+"test");
    await loginPage.doLogin();

    let errorMsg = await loginPage.getErrorMessage();
    expect(errorMsg).to.eq("Incorrect username or password");
    //expect(errorMsg).to.be.true;
  });
});
