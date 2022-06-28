class themePage {

    themeBtn() {
        return cy.get('.fixed-widgets')
    }

    darkThemeBtn() {
        return cy.get('span[text="Dark theme"]')
    }

    lightThemeBtn() {
        return cy.get('span:contains("Default theme")');
    }
}
export default themePage