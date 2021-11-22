/// <reference types="Cypress" />
class CheckoutOverviewPage{

  //locators
  getItemPrice(){
    return cy.get('.inventory_item_price')
  }

  getSummaryTotalPrice(){
    return cy.get('.summary_total_label')
  }

//*********************************************************************************

  //actions
  compareProductPrice(){
    let sum = 0
    this.getItemPrice().each(priceTxt => {
      let priceInt = parseFloat(priceTxt.text().substring(1))
      sum += priceInt
    })
    
    this.getSummaryTotalPrice().then(summary => {
      let total = parseFloat(summary.text().substring(8))
      expect((sum*1.08).toFixed(2)).to.equal(total.toFixed(2))
    })


  }
}

export default CheckoutOverviewPage