/// <reference types="Cypress" />
class HomePage{

  //locators
  getPageTitle(){
    return cy.get('.title')
  }

  getInventoryItem(){
    return cy.get('.inventory_item')
  }

  getAddToCartBtn(){
    return cy.get('.btn')
  }

  getShoppingCartBadge(){
    return cy.get('.shopping_cart_badge')
  }

  getShoppingCartBadgeLink(){
    return cy.get('.shopping_cart_link')
  }

//*********************************************************************************

  //actions
  checkHomePage(){
    this.getPageTitle().should('have.text', 'Products')
  }

  selectProducts(data){
    data.forEach(productName => {
      this.getInventoryItem().each((el,ind) => {
        el.text().includes(productName) ? this.getAddToCartBtn().eq(ind).click() : true
      })
    })
  }

  checkShoppingCartBadge(nrOfItems){
    this.getShoppingCartBadge().should('have.text',nrOfItems)
  }

  clickShoppingCartBadgeLink(){
    this.getShoppingCartBadgeLink().click()
  }

}

export default HomePage