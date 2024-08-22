describe("First Test suit", function () {
    beforeEach('To Handle cookies',()=>{
        cy.clearCookies();
    })

    it("TC 01 Google Search", () => {
        cy.visit("https://www.google.com/");
        cy.get("#APjFqb")
            .should('be.visible')
            .type('cypress{enter}');
        cy.url().should('include', 'cypress');
        cy.get('[href="https://www.cypress.io/"]>h3')
            .click();
    });
    xit('TC 02 Wikipedia Search', () => {
        cy.visit("https://www.wikipedia.org/");
        //cy.viewport(1080,800)
        cy.viewport('macbook-16')
        cy.title().wait(500).should('eq','Wikipedia');
        cy.get('#searchInput').clear().type('cypress{enter}');
        cy.url().should('include','/wiki/Cypress');
        cy.get('.mw-page-title-main').should('have.text','Cypress')




    })

});