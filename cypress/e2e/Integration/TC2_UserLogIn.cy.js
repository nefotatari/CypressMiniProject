/// <reference types="cypress" />
import LoginPage from "../PageObjects/LoginPage"
describe('Implementation of user login', () => {
  const login = new LoginPage();
  before(() => {
    login.navigate()
  })
  it('should Login succesfully', () => {
    cy.fixture('user').should((user) => {
      login.clickLogin()
      login.enterEmail(user.email)
      login.enterPassword(user.password)
      login.submit()
      login.assertIsLogedIn()
    })
  })
  it('should LogOut', () => {
    login.logOut()
  })
})
