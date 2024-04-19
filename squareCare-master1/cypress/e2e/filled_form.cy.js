describe('The Home Page', () => {
  it('successfully filled the form', () => {
    cy.visit('https://yunjiaapp-c337d89ea438.herokuapp.com/?');
    cy.get('#username').type('stonybrooko');
    cy.get('#email').type('stonybrook@sbu.com');
    cy.get('#submit_button').click();


    
    
  })
})
