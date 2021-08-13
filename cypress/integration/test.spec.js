/// <reference types="Cypress" />
import LoginPage from '../pageObjects/LoginPage'
import YourCartPage from '../pageObjects/YourCartPage'
import BasePage from '../pageObjects/BasePage'
import CheckoutInformationPage from '../pageObjects/CheckoutInformationPage'
import HomePage from '../pageObjects/HomePage'

//REMOVE ALL THE PARAMETERS
const loginPage = new LoginPage()
const yourCartPage = new YourCartPage()
const basePage = new BasePage()
const checkoutInformationPage = new CheckoutInformationPage()
const homePage = new HomePage()

describe("Login Page", function(){

  beforeEach(() => {
    cy.fixture('data').then(
      function(data){
        this.data = data
      })
    cy.writeFile('draft.txt', '')
  })

  it("Login errors test", function(){

    loginPage.login(this.data.username,this.data.wrongpassword, 'error')
    loginPage.login(this.data.wrongusername,this.data.password, 'error')

  })

  it("Buying items test", function(){
    loginPage.login(this.data.username,this.data.password)
    let nrOfItems = homePage.selectProduct(this.data.productName)
    homePage.readProductPrice(this.data.productName)

    //check the file values
    cy.readFile('draft.txt').then(el => {
     // let arr = []
      console.log(el.split(' '), '<-')
    })

    yourCartPage.checkShoppingCartBadge(nrOfItems)
    checkoutInformationPage.fillInTheCheckoutForm(this.data.firstname,this.data.lastname,this.data.postalcode)


    // basePage.logOutFromApplication()
  })
})