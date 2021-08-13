/// <reference types="Cypress" />
import BasePage from "./BasePage"


class LoginPage extends BasePage{

  login(username,password,error){

    const basePage = new BasePage()
    basePage.visitWebsite()

    cy.get('[data-test=username]').type(username)
    cy.get('[data-test=password]').type(password)
    cy.get('[data-test=login-button]').click()
    error ? 
    cy.get('[data-test=error]').should('be.visible').and('have.text', "Epic sadface: Username and password do not match any user in this service")
    : cy.get('.title').should('have.text', 'Products')

  }
}

export default LoginPage