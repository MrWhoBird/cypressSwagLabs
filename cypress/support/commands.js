// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
// Cypress.Commands.add('selectProduct', productName => {
//   cy.get('.inventory_item').each(($el,$ind) => {
//     $el.text().includes(productName) ? cy.get('.btn').eq($ind).click() : true
//   })
// })

// Cypress.Commands.add('readProductPrice', productName => {
//   cy.get('.inventory_item').each((el,ind) => {
//     el.text().includes(productName) ? cy.get('.inventory_item_price').eq(ind).then(x => {
//       let price = parseFloat(x.text().substring(1))
//       console.log(price,'price')
//       //sum = sum + price
//       cy.writeFile('draft.txt', String(price)+ ' ', { flag: 'a+' })
//       console.log('sum')}) : true
//   })
// })

// Cypress.Commands.add('readProductPrice', productName => {
//   cy.get('.inventory_item').each(($el,$ind) => {

//     if($el.text().includes(productName)){
//       cy.get('.inventory_item_price').eq($ind).then(el => {return cy.wrap(parseFloat(el.text().substring(1)))}

//       )} 

//   })
// })
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
