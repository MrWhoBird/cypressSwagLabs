/// <reference types="Cypress" />
import BasePage from '../pageObjects/BasePage'
import CheckoutInformationPage from '../pageObjects/CheckoutInformationPage'
import CheckoutOverviewPage from '../pageObjects/CheckoutOverviewPage'
import HomePage from '../pageObjects/HomePage'
import LoginPage from '../pageObjects/LoginPage'
import YourCartPage from '../pageObjects/YourCartPage'

const basePage = new BasePage()
const checkoutInformationPage = new CheckoutInformationPage()
const checkoutOverviewPage = new CheckoutOverviewPage()
const homePage = new HomePage()
const loginPage = new LoginPage()
const yourCartPage = new YourCartPage()

describe("purchaseTest", function(){

  beforeEach(() => {
    cy.fixture('data').then(
      function(data){
        this.data = data
      })
    basePage.visitWebsite() 
  })

  it("Buy variable amount of items test", function(){
    loginPage.typeUsername(this.data.standard_user)
    loginPage.typePassword(this.data.password)
    loginPage.clickLoginButton()
    homePage.selectProducts(this.data.productName)
    homePage.checkShoppingCartBadge(this.data.productName.length)
    homePage.clickShoppingCartBadgeLink()
    yourCartPage.checkShoppingCartPage()
    yourCartPage.clickCheckoutButton()
    checkoutInformationPage.fillInCheckoutForm(this.data.firstname,this.data.lastname,this.data.postalcode)
    checkoutInformationPage.clickContinueBtn()
    checkoutOverviewPage.compareProductPrice()
  })
})