import LoginPage from '../pages/loginPage'
import TimeLoggingPage from '../pages/timeLoggingPage'
import { ROLES, current_user } from '../helpers/constants'

describe('Sourcebooks login', function () {

    it('Should display validation for empty user after attempted loggin', () => {
        LoginPage.visit('/');
        LoginPage.getValidationIndicator().should('not.visible')
        LoginPage.getSubmitButton().click()
        LoginPage.getValidationIndicator().should('be.visible')
    })

    const fullUserName = current_user.firstName + ' ' + current_user.lastName
    ROLES.forEach((role) => {
        it('Should be able to login with role "' + role.name + '"', () => {

            LoginPage.visit()
            LoginPage.getUserDropDown().click({ force: true })
            LoginPage.getUserOption(fullUserName).click()
            LoginPage.getRoleDropDown().click({ force: true })
            LoginPage.getRoleOption(role.name).click()
            LoginPage.getSubmitButton().click()

            cy.url().should('include', '/time-logging');
            TimeLoggingPage.getPageTitle().should('contain', 'Timesheets')
            TimeLoggingPage.getCalendar().should('be.visible')
            TimeLoggingPage.getTileForm().should('be.visible')

            TimeLoggingPage.getActiveTab().should('have.length', 1)
                .and('contain', 'Time Logging')
                .and('have.css', 'color', 'rgb(64, 76, 237)')

            TimeLoggingPage.getUserName().should('contain', fullUserName)
            TimeLoggingPage.getTabs().should('have.length', role.tabs)

        })
    })

})