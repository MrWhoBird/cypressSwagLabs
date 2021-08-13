/// <reference types="Cypress" />


class YourCartPage{

    checkShoppingCartBadge(nrOfItems){

    cy.get('.shopping_cart_badge').should('have.text',nrOfItems)
    cy.get('.shopping_cart_link').click()
    cy.get('.title').should('have.text', 'Your Cart')

  }

}

export default YourCartPage