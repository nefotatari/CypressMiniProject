class DashboardPage {
    hoverOverComputers() {
        cy.get('.notmobile li').contains('Computers').realHover();
    }
    clickNotebooks() {
        cy.get('.notmobile [href="/notebooks"]').should('exist').click()
    }
    checkPageIsOpened() {
        cy.get('.master-wrapper-content').contains('Notebooks').should('exist')
    }
    selectProductsPageSize(size) {
        cy.get('#products-pagesize')
            .select(size)
            .should('have.value', size)
        return this
    }
    checkProductsNo(number) {
        cy.get('.product-item')
            .should('have.length', number)
        return this
    }
    checkMemory(size) {
        cy.get('label')
            .contains(size)
            .prev()
            .not('[disabled]')
            .check()
            .should('be.checked')
        return this
    }
    uncheckMemory(size) {
        cy.get('label')
            .contains(size)
            .prev()
            .not('[disabled]')
            .uncheck()
            .should('not.be.checked')
        return this
    }
    addToWishlistNthEl(elNo) {
        cy.get('.add-to-wishlist-button').eq(elNo).click()
        return this
    }
    checkAddedToWishlistNotification() {
        cy.get('.bar-notification p')
            .should('have.text', 'The product has been added to your wishlist')
    }
    addToCartNthEl(elNo) {
        cy.get('.product-box-add-to-cart-button').eq(elNo).should('be.visible').click({ force: true })
        return this
    }
    checkAddedToCartNotification() {
        cy.get('.bar-notification p').should('be.visible').and('have.text', 'The product has been added to your shopping cart')
    }
    openProductsDetailsPage(el) {
        cy.get('.product-item .product-title a').eq(el).click()
    }
    checkDetailsPageDisplayed() {
        cy.get('[class="page product-details-page"]').should('exist')
    }
    wishlistCount(count) {
        cy.get('.wishlist-qty').should('have.text', '(' + count + ')');
    }
    cartCount(count) {
        cy.get('.cart-qty').should('have.text', '(' + count + ')');
    }
}
export default DashboardPage