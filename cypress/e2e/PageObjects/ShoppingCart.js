import DashboardPage from "./DashboardPage";

class ShoppingCart extends DashboardPage {
    hoverShopingCart() {
        cy.get('#topcartlink').realHover()
    }
    clickGoToCart() {
        cy.get('.cart-button').should('exist').and('be.visible').click()
    }
    removeNotification() {
        cy.get('#bar-notification span').click()
    }
    ckeckUpdateCartExists() {
        cy.get('#updatecart').should('exist').and('be.visible')
    }
    ckeckContinueShoppingExists() {
        cy.get('[name="continueshopping"]').should('exist').and('be.visible')
    }
    ckeckEstimateShippingExists() {
        cy.get('.estimate-shipping-button').should('exist').and('be.visible')
    }
    checkItemsCostEqualsTotal() {
        let totalCost = 0;
        cy.get('.product-subtotal').each(($ele) => {
            const price = parseFloat($ele.text().slice(1).replace(/,/g, ''))
            totalCost += price;
        })
        cy.get('.order-total .value-summary').invoke('text').then((total) => {
            const totalAmount = parseFloat(total.slice(1).replace(/,/g, ''))
            expect(+totalAmount).to.equal(totalCost)
        })
    }
    checkTotalAmountColorBlue() {
        cy.get('.order-total .value-summary').should('have.css', 'color', 'rgb(74, 178, 241)')
    }
    getItemsQuantity() {
        return cy.get('.cart tbody tr').then(el => {
            return el.length
        })
    }
    deleteItemFromCart(item) {
            cy.get('.remove-btn').eq(item-1).click()
    }
    assertCardIsDecreased(cardQuantity) {
        cy.get('.cart-qty').invoke('text').then((total) => {
            const el = parseFloat(total.replace(/[()]/g, ''))
            expect(el).to.equal(cardQuantity - 1)
        })
    }
    clickEstimateShopping() {
        cy.get('.estimate-shipping-button').should('exist').and('be.visible').click()
    }
    estimatePopupIsShown() {
        cy.get('#estimate-shipping-popup').should('exist').and('be.visible')
    }
    selectCountry() {
        cy.get('#CountryId').select('Albania').should('have.value', '212')
    }
    enterZipCode(zipCode) {
        cy.get('#ZipPostalCode').type('1001').should('have.value', zipCode)
        return this
    }
    clickApplyButton() {
        cy.get('button').contains('Apply').should('exist').click()
    }
    removeItems(){
        cy.get('.remove-btn').each((el) => {
            el.click()
        })
    }
    verifyShoppingCartIsEmpty() {
        cy.get('.order-summary-content .no-data').should('exist').invoke('text').then(message => {
            expect(message.trim()).to.equal('Your Shopping Cart is empty!')
        })
    }
}
export default ShoppingCart