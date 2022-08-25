describe('My Test', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/login')
        cy.intercept({method: 'POST', url: '/prod/login',}).as('login-api')
        //cy.intercept({method: 'POST', url: '/prod/login',}).as('login-api')
        //cy.wrap(LoginPage()).as('page')
    })

    it ('Should display username input field', () => {
        //cy.get('input[data-testid=login-username]').should('be.visible')
        cy.get('input[name=username]').should('be.visible')
    });

    it('Should display password input field', () => {
        //cy.get('input[data-testid=login-username]').should('be.visible')
        cy.get('input[name=password]').should('be.visible')
    });

    it('Can logon with valid username and password', () => {
        cy.get('input[name=username]').type('testuser')
        cy.get('input[name=password]').type('123')
        cy.get('button[name=submit]').click()
        cy.wait('@login-api')

        cy.url().then((url) => {
            console.log(url)
            expect(url).to.be.eql('http://localhost:3000/dashboard')
        })
    })
})