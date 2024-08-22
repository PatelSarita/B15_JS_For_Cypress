/** https://docs.cypress.io/api/cypress-api/custom-commands
 * Examples of parent commands:
    cy.visit()
    cy.get()
    cy.request()
    cy.exec()
    cy.intercept()
 */

/**
 * Child Commands
    Child commands are always chained off of a parent command, or another child command.
    The previous subject will automatically be yielded to the callback function.

* Examples of child commands:
    .click()
    .trigger()
    .find()
    .should()
    .as()
 */

    /**
     * Examples of dual commands:
      cy.contains()
      cy.screenshot()
      cy.scrollTo()
      cy.wait()
     */

 //visit
 cy.visit("open url");
 cy.visit("url",{timeout:2000});
 
 cy.url().should('include',path);// should is a promise in here

 //finding element
 cy.get(loc).click();
 cy.get(loc).should('be.visible');
  //negative assertion
 cy.get(loc).should('not.be.visible');

 cy.get('h1').should('have.text','DevEx');
 cy.get('input').should('have.value','eurotech@gmail.com');

 //parent to child
 cy.get(loc).first();
 cy.get(loc).next();
 cy.get(loc).last();
 cy.get(loc).eq(3).click();

 //navigate back
 cy.go('back');

 cy.get('tbody tr').nextAll().click({multiple:true});
 cy.get(loc).prev().click();// previous one
 cy.get(loc).prevAll().click({multiple:true});

 //position handling
 cy.get(loc).click('top');
 cy.get(loc).click('bottom');
 cy.get(loc).click('bottomLeft');

 //hover handling
 cy.get(loc).trigger('mouseover').click()
 cy.get(loc).trigger('mousedown').click()

 //login
 cy.get('#loginpage-input-email').clear().type('eurotech@gmail.com');


