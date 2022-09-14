/// <reference types="cypress" />
import LoginPage from "../PageObjects/LoginPage"
import DashboardPage from "../PageObjects/DashboardPage"
describe('Implementation of user register', () => {
  beforeEach(() => {
    
  })
  it('should Login succesfully', () => {
    const login = new LoginPage();
    cy.fixture('user').should((user) => {
      login.navigate()
      login.clickLogin()
      login.enterEmail(user.email)
      login.enterPassword(user.password)
      login.submit()
      login.assertIsLogedIn()
    })
  })
  it('should add and remove items to dashboard', () => {
    cy.intercept('POST', '**/addproducttocart/catalog/**').as('addToList')
    const dashboard = new DashboardPage();
    cy.viewport(1280, 720)
    dashboard.hoverOverComputers()
    dashboard.clickNotebooks()
    cy.url().should('include', '/notebooks')
    dashboard.checkPageIsOpened()
    dashboard.selectProductsPageSize('9')
    dashboard.checkProductsNo(6)
    dashboard.checkMemory('16 GB')
    dashboard.checkProductsNo(1)
    dashboard.uncheckMemory('16 GB')
    dashboard.checkProductsNo(6)
    dashboard.addToWishlistNthEl(1)
    cy.wait('@addToList')
    dashboard.checkAddedToWishlistNotification()
    dashboard.addToWishlistNthEl(2)
    cy.wait('@addToList')
    dashboard.checkAddedToWishlistNotification()
    dashboard.addToWishlistNthEl(3)
    cy.wait('@addToList')
    dashboard.checkAddedToWishlistNotification()
    dashboard.openProductsDetailsPage(3)
    dashboard.checkDetailsPageDisplayed()
    cy.go('back')
    dashboard.addToCartNthEl(4)
    cy.wait('@addToList')
    dashboard.checkAddedToCartNotification()
    dashboard.addToCartNthEl(5)
    cy.wait('@addToList')
    dashboard.checkAddedToCartNotification()
    dashboard.wishlistCount(3)
    dashboard.cartCount(2)
  })
})
