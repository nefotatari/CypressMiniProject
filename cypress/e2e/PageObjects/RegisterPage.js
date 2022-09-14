class LoginPage {
    navigate() {
        cy.visit('/')
    }
    clickLogin() {
        cy.get('.ico-login').should('exist').click()
        return this
    }
    clickRegisterButton() {
        cy.get('.register-button').should('exist').click()
        return this
    }
    checkGender() {
        cy.get('#gender-female')
            .not('[disabled]')
            .check()
            .should('be.checked')
        return this
    }
    enterName(name) {
        cy.get('#FirstName')
            .clear()
            .type(name)
            .should('have.value', name)
        return this
    }
    enterSurname(surname) {
        cy.get('#LastName')
            .clear()
            .type(surname)
            .should('have.value', surname)
        return this
    }
    selectDateOfBirthday(date) {
        cy.get('[name="DateOfBirthDay"]').select(date)
        cy.get('[name="DateOfBirthDay"]').should('have.value', date)
        return this
    }
    selectBirthMonth() {
        cy.get('[name="DateOfBirthMonth"]').select('March')
        cy.get('[name="DateOfBirthMonth"]').should('have.value', '3')
    }
    selectBirthYear(year) {
        cy.get('[name="DateOfBirthYear"]').select(year)
        cy.get('[name="DateOfBirthYear"]').should('have.value', year)
        return this
    }
    enterEmail(email) {
        cy.get('#Email')
            .clear()
            .type(email)
            .should('have.value', email)
        return this
    }
    enterCompany(companyName) {
        cy.get('#Company')
            .clear()
            .type(companyName)
            .should('have.value', companyName)
        return this
    }
    enterPassword(password) {
        cy.get('#Password').clear()
            .type(password).should('have.value', password)
        return this
    }
    confirmPassword(password) {
        cy.get('#ConfirmPassword')
            .clear()
            .type(password)
            .should('have.value', password)
        return this
    }
    submit() {
        cy.get('#register-button').should('exist').click()
    }
    assertIsRegistered() {
        cy.get('.result').should('have.text', 'Your registration completed')
    }
}
export default LoginPage