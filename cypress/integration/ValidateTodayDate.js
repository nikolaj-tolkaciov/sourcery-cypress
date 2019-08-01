import TimeLoggingPage from '../helpers/TimeLoggingPage'

// T-1
describe('Today date validation', () => {

    it('today\'s date should be indicated in the calendar', () => {
        cy.loginAs('Admin')
        TimeLoggingPage.visit()
        const today = new Date();
        const curr_day = String(today.getDate());
        TimeLoggingPage.getCurrDay().should('contain', curr_day)
    })

}) 