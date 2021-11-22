/// <reference types="Cypress" />
class CheckoutInformationPage{

  //locators
  getFirstNameInput(){
    return cy.get('[data-test=firstName]')
  }

  getLastNameInput(){
    return cy.get('[data-test=lastName]')
  }

  getPostalCodeInput(){
    return cy.get('[data-test=postalCode]')
  }

  getContinueBtn(){
    return cy.get('[data-test=continue]')
  }

//*********************************************************************************


  //actions
  fillInCheckoutForm(firstname,lastname,postalcode){
    this.getFirstNameInput().type(firstname)
    this.getLastNameInput().type(lastname)
    this.getPostalCodeInput().type(postalcode)
  }

  clickContinueBtn(){
    this.getContinueBtn().click()
  }

}

export default CheckoutInformationPage