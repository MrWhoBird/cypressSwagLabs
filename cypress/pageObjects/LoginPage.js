/// <reference types="Cypress" />
class LoginPage {

  //locators
  getUsernameField(){
    return cy.get('[data-test=username]')
  }

  getPasswordField(){
    return cy.get('[data-test=password]')  
  }

  getLoginButton(){
    return cy.get('[data-test=login-button]') 
  }

  getErrorPlaceholder(){
    return cy.get('[data-test=error]')
  }

//*********************************************************************************

  //actions
  typeUsername(username){
    this.getUsernameField().type(username)
  }

  typePassword(password){
    this.getPasswordField().type(password)  
  }

  clickLoginButton(){
    this.getLoginButton().click()  
  }

  checkInvalidCredentialsPlaceholder(){
    this.getErrorPlaceholder().should('be.visible').and('have.text', "Epic sadface: Username and password do not match any user in this service")
  }

  checkLockedCredentialsPlaceholder(){
    this.getErrorPlaceholder().should('be.visible').and('have.text', "Epic sadface: Sorry, this user has been locked out.")
  }

  checkEmptyUsernamePlaceholder(){
    this.getErrorPlaceholder().should('be.visible').and('have.text', "Epic sadface: Username is required")
  }

  checkEmptyPasswordPlaceholder(){
    this.getErrorPlaceholder().should('be.visible').and('have.text', "Epic sadface: Password is required")
  }

}

export default LoginPage