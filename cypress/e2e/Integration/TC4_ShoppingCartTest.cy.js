/// <reference types="cypress" />
import LoginPage from "../PageObjects/LoginPage"
import ShoppingCart from "../PageObjects/ShoppingCart"
import DashboardPage from "../PageObjects/DashboardPage"

describe('Implementation of user register', () => {
    before(() => {

    })
    beforeEach(() => {

    })
    it('should add items to shopping cart', () => {
        cy.visit('/')
        cy.intercept('POST', '**/addproducttocart/catalog/**').as('addToList')
        const dashboard = new DashboardPage();
        cy.viewport(1280, 720)
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
        //Shopping Cart Test 
        const shoppingCart = new ShoppingCart();
        cy.viewport(1280, 720)
        shoppingCart.removeNotification()

        shoppingCart.hoverShopingCart()
        shoppingCart.clickGoToCart()
        cy.url().should('include', '/cart')

        shoppingCart.ckeckUpdateCartExists()
        shoppingCart.ckeckContinueShoppingExists()
        shoppingCart.ckeckEstimateShippingExists()

        shoppingCart.checkItemsCostEqualsTotal()
        shoppingCart.checkTotalAmountColorBlue()
    })
})
