describe('Create an account', () => {
  it('Create an account', () => {
    cy.visit('https://www.etsy.com')

    cy.get('.select-signin').click();
    cy.get('.select-register').click();

    cy.wait(1000)

    cy.get('#join_neu_email_field').type('abcd4@xyz.com')
    cy.get('#join_neu_first_name_field').type('abcd')
    cy.get('#join_neu_password_field').type('aBc1@3$5')
    cy.get('.wt-btn--primary.wt-width-full').click()
    
    cy.wait(2000)
    cy.get('h1').should('have.value', 'Welcome to Etsy, abcd')
  })
})