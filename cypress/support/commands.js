Cypress.Commands.add('visitPage', (url) => {
    cy.log(`visiting ${url}`)
    cy.visit(url)
})