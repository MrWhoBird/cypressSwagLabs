/// <reference types="Cypress" />
import BasePage from '../pageObjects/BasePage'
import HomePage from '../pageObjects/HomePage'
import LoginPage from '../pageObjects/LoginPage'

const basePage = new BasePage()
const homePage = new HomePage()
const loginPage = new LoginPage()

describe("loginTest", function(){

  beforeEach(() => {
    cy.fixture('data').then(
      function(data){
        this.data = data
      })
    basePage.visitWebsite()
  })

  it("Empty username test", function(){

    loginPage.typePassword(this.data.password)
    loginPage.clickLoginButton()
    loginPage.checkEmptyUsernamePlaceholder()
  })

  it("Empty password test", function(){

    loginPage.typeUsername(this.data.standard_user)
    loginPage.clickLoginButton()
    loginPage.checkEmptyPasswordPlaceholder()
  })

  it("Empty password and username test", function(){

    loginPage.clickLoginButton()
    loginPage.checkEmptyUsernamePlaceholder()
  })

  it("Invalid username test", function(){

    loginPage.typeUsername(this.data.wrong_user)
    loginPage.typePassword(this.data.password)
    loginPage.clickLoginButton()
    loginPage.checkInvalidCredentialsPlaceholder()
  })

  it("Invalid password test", function(){

    loginPage.typeUsername(this.data.standard_user)
    loginPage.typePassword(this.data.wrong_password)
    loginPage.clickLoginButton()
    loginPage.checkInvalidCredentialsPlaceholder()
  })

  it("Locked user login test", function(){

    loginPage.typeUsername(this.data.locked_out_user)
    loginPage.typePassword(this.data.password)
    loginPage.clickLoginButton()
    loginPage.checkLockedCredentialsPlaceholder()
  })

  it("Valid credentials login test", function(){

    loginPage.typeUsername(this.data.standard_user)
    loginPage.typePassword(this.data.password)
    loginPage.clickLoginButton()
    homePage.checkHomePage()
  })

})