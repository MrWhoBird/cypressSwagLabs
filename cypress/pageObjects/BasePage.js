/// <reference types="Cypress" />
class BasePage {
 
  //locators
  reactBurgerMenuBtn(){
    return cy.get('#react-burger-menu-btn')
  }

  logoutSidebarLink(){
    return cy.get('#logout_sidebar_link')
  }

//*********************************************************************************

  //actions
  visitWebsite(){
   cy.visit("https://www.saucedemo.com/")
  }

  logOutFromApplication(){
   this.reactBurgerMenuBtn().click()
   this.logoutSidebarLink().click()
  }

}

export default BasePage