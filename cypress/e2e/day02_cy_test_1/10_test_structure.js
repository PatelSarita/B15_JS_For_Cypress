/// <reference types="cypress" />

describe('First Test suit', function () {
    before(function () {
        //run once before this test suit
    })
    after(function () {
        //run once after this test suit
    })

    beforeEach(function () {
        //run before each test case in this test suit
    })
    afterEach(function () {
        //run after each test case in this test suit
    })


    it.only('First Test Case', function () {

    });
    it('Second Test Case', function () {

    });
    it('Third Test Case', function () {

    })

})

context('Second Test suit', () => {
    before(() => {
        //run once before this test suit
    })
    after(() => {
        //run once after this test suit
    })

    beforeEach(() => {
        //run before each test case in this test suit
    })
    afterEach(() => {
        //run after each test case in this test suit
    })


    it.skip('First Test Case', () => {
        // first test case will be skipped
    });
    xit('Second Test Case', () => {
        //test case 2 will be ignored
    });
    it('Third Test Case', () => {

    })

});

/*
    Main constructs in Cypress test development
    • describe(): It is is simply a way to group our tests. 
    • it(): We use it for an individual test case. 
    • before(): It runs once before all tests in the block.
    • after(): It runs once after all tests in the block.
    • beforeEach(): It runs before each test in the block.
    • afterEach(): It runs after each test in the block.
    • .only(): To run a specified suite or test, append ".only" to the function.
    • .skip(): To skip a specified suite or test, append ".skip()" to the 
    function. (you can also put “x” in front of it block to skip it)

    IF YOU WRITE;
        it.only --> Only this test case will run
        it.skip --> It will ignore this test case
  	    xit     --> Also will ignore this test case
*/