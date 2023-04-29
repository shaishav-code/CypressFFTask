describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.google.com')
    
    cy.get('#APjFqb').type('Any input ')
    
  

    cy.get('.erkvQe').then(($value) => {
           length = $value.length
           expect($value).to.have.length(length);
           cy.log("*** length obtained *** " + length)
           cy.log('Total search result 10')

           cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click()

    cy.url().should('include', 'Any+input');
    

    
    cy.wait(10000)

    


  

})
})
})