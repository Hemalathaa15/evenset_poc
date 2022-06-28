import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"

Given('I am on the https://www.antdv.com/components/menu/#Menu-Themes page', () => {
    cy.visit('https://www.antdv.com/components/menu/#Menu-Themes')
})

When('the default selected menu item is “Navigation One”', () => {
    cy.get('span:contains(" Navigation One ")').then($span => {
        if ($span.is(':visible')) {
        }
    })
})

And('I click any other menu item (i.e “Navigation Two”, “Option 3”), that menu item is selected', () => {
    cy.get('a:contains(" Navigation Four - Link ")').click()
})