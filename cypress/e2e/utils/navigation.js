import navigationPage from '../pages/navigationPage.js'
const navigation = new navigationPage();

Cypress.Commands.add('check navigation', (data) => {
    cy.visit('/')
    navigation.navigationOne.click()
    navigation.navigationFour.click()
})