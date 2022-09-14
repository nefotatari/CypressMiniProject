class CompareListPage {
    hoverComputers() {
        cy.get('.notmobile li').contains('Computers').realHover();
    }
    navigateToNotebooks() {
        cy.get('.notmobile [href="/notebooks"]').should('exist').click()
    }
    selectOneElement() {
        cy.get('.product-item a').eq(0).click()
    }
    openDetailPage() {
        cy.get('[class="page product-details-page"]').should('exist')
    }
    wishlistCount(count) {
        cy.get('.wishlist-qty').should('have.text', '(' + count + ')');
    }
    addToWishList() {
        cy.get('.add-to-wishlist button').click()
    }
}
export default CompareListPage