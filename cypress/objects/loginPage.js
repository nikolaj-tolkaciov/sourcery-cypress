class LoginPage{
    visit() {
        cy.visit('/')
    }

    getUserValidationIndicator() {
        return cy.get('.Select.not-valid')
    }
    
    getSubmitButton() {
        return cy.get('[type="submit"]')
    }

    getLoginUserId(){
        return cy.get('[id="loginForm.userId"]')
    }

    getLoginRole(){
        return cy.get('[id="loginForm.role"]')
    }
    
    getSpecificUserFromDropDown(userName){
        return cy.get(`[aria-label="${userName}"]`)
    }

    getSpecificRoleFromDropDown(role){
        return cy.get(`[aria-label="${role}"]`)
    }

    getPageTitle(title){
        return cy.get('.page__title').contains(`${title}`)
    }

    getCalendar(){
        return cy.get('.calendar')
    }

    getTileForm(){
        return cy.get('.tile.form')
    }

    getUserInfoTitle(userName){
        return cy.get('.user-info__title').contains(`${userName}`)
    }

    getTodaysDay(){
        return cy.get('.calendar__date').contains(new Date().getDate())
    }

    getNavigationLength(){
        return cy.get('.main-nav').find('li')
    }

    urlShouldInclude(endPoint){
        return cy.url().should('include', `${endPoint}`)
    }

    getActiveNavLinkColor(rgbCode){
        return cy.get('.main-nav__link--active').should('have.css', 'color').and('eq', `${rgbCode}`)
    }

    getActiveNavLink(link){
        return cy.get('.main-nav__link--active').should('have.attr', 'href', `${link}`)
    }

    getNavLink(name){
        return cy.get('.main-nav__link').contains(`${name}`)
    }
    
}

export default LoginPage