/// <reference types="Cypress" />
 
class BasePage {
 
  visitWebsite(){
   cy.visit("https://www.saucedemo.com/")
  }

  setDataFixtures(){
    return cy.fixture('data')
  }

  logOutFromApplication(){
   cy.get('#react-burger-menu-btn').click()
   cy.get('#logout_sidebar_link').click()
  }

}

export default BasePage 