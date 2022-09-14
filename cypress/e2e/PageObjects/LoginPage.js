class LoginPage {
    navigate() {
        cy.visit('/')
    }
    clickLogin() {
        cy.get('.ico-login').should('exist').click()
        return this
    }
    enterEmail(email) {
        cy.get('#Email')
            .clear()
            .type(email)
            .should('have.value', email)
        return this
    }
    enterPassword(password) {
        cy.get('#Password').clear()
            .type(password).should('have.value', password)
        return this
    }
    submit() {
        cy.get('.login-button').should('exist').click()
    }
    assertIsLogedIn(){
        cy.get('.topic-block-title h2').should('have.text', 'Welcome to our store')
    }
    logOut(){
        cy.get('.ico-logout').should('exist').click()
    }
}
export default LoginPage