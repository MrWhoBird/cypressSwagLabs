/// <reference types="Cypress" />


class HomePage{

  selectProduct(data){
    let nrOfItems = 0
    data.forEach(productName => {
      //cy.selectProduct(el)
      cy.get('.inventory_item').each((el,ind) => {
        el.text().includes(productName) ? cy.get('.btn').eq(ind).click() : true
      })
      nrOfItems++
      // cy.readProductPrice(productName)
    })
    return nrOfItems
  }

  readProductPrice(data){

    data.forEach(productName => {
      cy.get('.inventory_item').each((el,ind) => {
        el.text().includes(productName) ? cy.get('.inventory_item_price').eq(ind).then(x => {
          let price = parseFloat(x.text().substring(1))
          console.log(price,'price')
          //sum = sum + price
          cy.writeFile('draft.txt', String(price)+ ' ', { flag: 'a+' })
          console.log('sum')}) : true
      })
    })
  }


}

export default HomePage