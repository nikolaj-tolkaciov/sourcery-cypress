import LoginPage from '../helpers/LoginPage'
import TimeLoggingPage from '../helpers/TimeLoggingPage'
import { ROLES, tabCount } from '../helpers/constants'

// T-2
describe('Sourcebooks login', function () {

    it('Should display validation for empty user after attempted loggin', () => {
        LoginPage.visit('/');
        LoginPage.getValidationIndicator().should('not.visible')
        LoginPage.getSubmitButton().click()
        LoginPage.getValidationIndicator().should('be.visible')
    })

    const userName = 'Modestas Gujis'

    ROLES.forEach((role, idx) => {
        it('Should be able to login with role "' + role + '"', () => {

            LoginPage.visit()
            LoginPage.getUserDropDown().click({ force: true })
            LoginPage.getUserOption(userName).click()
            LoginPage.getRoleDropDown().click({ force: true })
            LoginPage.getRoleOption(role).click()
            LoginPage.getSubmitButton().click()

            cy.url().should('include', '/time-logging');
            TimeLoggingPage.getPageTitle().should('contain', 'Timesheets')
            TimeLoggingPage.getCalendar().should('be.visible')
            TimeLoggingPage.getTileForm().should('be.visible')

            const activeTab = TimeLoggingPage.getActiveTab()
            
            activeTab.should('have.length', 1)
            activeTab.should('contain', 'Time Logging')

            TimeLoggingPage.getUserName().should('contain', 'Modestas Gujis')
            TimeLoggingPage.getTabs().should('have.length', tabCount[idx])

            TimeLoggingPage.getActiveTab().should('have.css', 'color', 'rgb(64, 76, 237)')
        })
    })
})