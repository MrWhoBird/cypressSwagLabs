/// <reference types="Cypress" />
class YourCartPage{

  //locators
  getShoppingPageTitle(){
    return cy.get('.title')
  }

  getCheckoutBtn(){
    return cy.get('[data-test=checkout]')
  }

//*********************************************************************************

  //actions
  checkShoppingCartPage(){
    this.getShoppingPageTitle().should('have.text', 'Your Cart')
  }

  clickCheckoutButton(){
    this.getCheckoutBtn().click()
  }

}

export default YourCartPage