class navigationPage {

    navigationOne() {
        return cy.get('span:contains(" Navigation One ")')
    }

    navigationFour() {
        return cy.get('a:contains(" Navigation Four - Link ")')
    }
}
export default navigationPage