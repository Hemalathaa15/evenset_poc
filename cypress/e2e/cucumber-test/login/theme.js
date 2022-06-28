import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"

Given('I am on the https://www.antdv.com/components/menu/#Menu-Themes page', () => {
    cy.visit('https://www.antdv.com/components/menu/#Menu-Themes')
})

And('the default theme is the {string} theme', (dark) => {
    cy.get('.fixed-widgets').click()
    cy.get('span:contains("Dark theme")').click()
})

When('I click the theme switch, the selected theme changes to {string}', (light) => {
    cy.get('.fixed-widgets').click()
    cy.get('span:contains("Default theme")').click()
})


