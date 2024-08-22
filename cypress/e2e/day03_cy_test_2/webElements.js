describe('Web Elements',()=>{
    beforeEach(()=>{
        cy.visit('https://the-internet.herokuapp.com/')
    });

    it('Finding Locators',()=>{

        //By Tag name
        cy.get('h1')
        //By ID
        cy.get('#content')
        //By Class NAme
        cy.get('.example')
        cy.get('.large-6.small-12.columns.large-centered')
        //By Attribute name
        cy.get('[method]')
        //By Attribute name and value
        cy.get('[method="post"]')
        //By Tag name and Attribute name and value
        cy.get('form[method="post"]')
        //contains
        cy.contains('Forgot Password').click()
        //By text = different approach
        cy.get('h2').should('contain','Forgot Password').click()
        //to find login button
        cy.get('input[name="email"]')
        .parents('form')
        .find('input')
        .should('contain','submit')
        .click();
    })
})
