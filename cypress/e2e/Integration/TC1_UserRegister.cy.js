/// <reference types="cypress" />
import RegisterPage from "../PageObjects/RegisterPage"
describe('Implementation of user register', () => {
  const register = new RegisterPage();
  before(() => {
    register.navigate()
  })
  it('should register succesfully', () => {
    register.clickLogin()
    register.clickRegisterButton()
    cy.fixture('user').should((user) => {
      register.checkGender()
      register.enterName(user.name)
      register.enterSurname(user.surname)
      register.selectDateOfBirthday('29')
      register.selectBirthMonth()
      register.selectBirthYear('1999')
      register.enterEmail(user.email)
      register.enterCompany(user.employment)
      register.enterPassword(user.password)
      register.confirmPassword(user.password)
      cy.intercept('POST', '**/register*').as('register')
      register.submit()
      cy.wait('@register')
      cy.url().should('include', '/registerresult')
      register.assertIsRegistered()
    })
  })
})
