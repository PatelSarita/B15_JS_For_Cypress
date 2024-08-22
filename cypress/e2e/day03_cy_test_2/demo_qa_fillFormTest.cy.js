context('Context: Demoqa web test',()=>{
it('TC 03: open the demo qa web page, practice form and fill form',()=>{
    cy.clearCookies();
    cy.visit('https://demoqa.com/automation-practice-form')
    .get('#firstName').type('Mike')
    .get('#lastName').type('Masters')

    //Generate a random email address
    const email=`mike${Math.floor(10000+Math.random()*900000)}@tech.com`;
    // that syntax above will create a 6 digit number for us
    cy.get('#userEmail').clear().type(email);

   // cy.contains('Male').should('be.visible').click();
   cy.get('[class="custom-control custom-radio custom-control-inline"] input')
   .each((item,index,list)=>{
    expect(list).to.have.length(3);//lenght should be 3
    expect(item).to.have.attr('required');//each element should has "required" attribute
   });
   
   cy.get('[class="custom-control custom-radio custom-control-inline"]')
   .then(($buttons)=>{
        cy.wrap($buttons).eq(0).wait(500).click();
        cy.wrap($buttons).eq(1).should('not.be.checked');
        cy.wrap($buttons).eq(2).should('not.be.checked');
   });
   // moble Number
   const phoneNumber=`555037${Math.floor(1000+Math.random()*9000)}`;
   cy.get('#userNumber').type(phoneNumber);

   //Date of Birth
   cy.get('#dateOfBirthInput').then($input=>{
    $input.val('27 Aug 2002').trigger('change');
   })

   //Subject
   cy.get('.subjects-auto-complete__value-container').type('SDET Class Form')

    //Hobbies
    cy.get('#hobbiesWrapper > .col-md-9')
    .find('.custom-control-label')
    .then(checkBoxes=>{
     cy.wrap(checkBoxes).eq(0).click().wait(500).parent().should('contain','Sports');
     cy.wrap(checkBoxes).eq(1).click().parent().should('contain','Reading');
     cy.wrap(checkBoxes).eq(2).parent().should('contain','Music');
     cy.wrap(checkBoxes).eq(2).click();
    });

    
    cy.get('#uploadPicture').attachFile('wallpaper_2.png');

})
})