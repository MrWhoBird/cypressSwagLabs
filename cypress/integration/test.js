/// <reference types="Cypress" />

describe("Login Page", function(){

  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/")
    cy.fixture('data').then(
      function(data){
        this.data = data
      })
  })

  it("Wrong password", function(){

    cy.get('[data-test=username]').type(this.data.username)
    cy.get('[data-test=password]').type("wrongpassword")
    cy.get('[data-test=login-button]').click()
    cy.get('[data-test=error]').should('be.visible').and('have.text', "Epic sadface: Username and password do not match any user in this service")
  })

  it("Valid password", function(){

    cy.get('[data-test=username]').type(this.data.username)
    cy.get('[data-test=password]').type(this.data.password)
    cy.get('[data-test=login-button]').click()
    cy.get('.title').should('have.text', 'Products')

    this.data.productName.forEach(el => cy.selectProduct(el))
    
    cy.get('.shopping_cart_badge').should('have.text','2')
    cy.get('.shopping_cart_link').click()
    cy.get('.title').should('have.text', 'Your Cart')
  })
})