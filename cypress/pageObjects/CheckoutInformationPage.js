/// <reference types="Cypress" />


class CheckoutInformationPage{

  fillInTheCheckoutForm(firstname,lastname,postalcode){

    cy.get('[data-test=checkout]').click()
    cy.get('[data-test=firstName]').type(firstname)
    cy.get('[data-test=lastName]').type(lastname)
    cy.get('[data-test=postalCode]').type(postalcode)
    cy.get('[data-test=continue]').click()
    cy.get('[data-test=finish]').click()
}

}

export default CheckoutInformationPage