/// <reference types="cypress" />
import LoginPage from "../PageObjects/LoginPage"
import CompareListPage from "../PageObjects/CompareListPage"
describe('Implementation of compare list scenario', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should Login succesfully', () => {
        const login = new LoginPage();
        cy.fixture('user').should((user) => {
            login.clickLogin()
            login.enterEmail(user.email)
            login.enterPassword(user.password)
            login.submit()
            login.assertIsLogedIn()
        })
    })
    
    it('add product to wishlist using interception', () => {
        cy.intercept('POST', '**/addproducttocart/details/*/2', { fixture: 'response.json' }).as('addToCart')
        cy.viewport(1280, 720)
        const compareList = new CompareListPage();
        compareList.hoverComputers()
        compareList.navigateToNotebooks()
        cy.url().should('include', '/notebooks')
        compareList.selectOneElement()
        compareList.openDetailPage()        
        compareList.addToWishList()
        cy.wait('@addToCart').should(({ request, response }) => {
            expect(request.body).to.include('addtocart')
            expect(response && response.body).to.have.property('success', true)
        })
        compareList.wishlistCount(1)
    })
})
