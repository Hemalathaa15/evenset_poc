import themePage from '../pages/themePage.js'
const theme = new themePage();

Cypress.Commands.add('check Theme', (data) => {
    cy.visit('/')
    theme.themeBtn.click()
    theme.darkThemeBtn.click()
    theme.themeBtn.click()
    theme.lightThemeBtn.click()
})