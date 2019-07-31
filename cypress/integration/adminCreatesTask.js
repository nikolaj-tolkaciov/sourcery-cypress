import LoginPage from '../objects/loginPage';
import TimeLoggingPage from '../objects/timeLoggingPage';


const loginPage = new LoginPage()
const timeLoggingPage = new TimeLoggingPage()
let taskName=Math.random().toString('36').substring('2, 15')

describe('Sourcebooks login', function() {

    beforeEach(() => {
        cy.loginAs("Admin");
        loginPage.visit();
    })

    it('should create new task for Admin', function () {

        timeLoggingPage.getUrl()
        timeLoggingPage.getPageTitle().contains('Timesheets')
        timeLoggingPage.getCalendar().should('be.visible')
        timeLoggingPage.getTitleForm().should('be.visible')
        timeLoggingPage.getUserTitle().contains('Asta Radžiuviene')
        timeLoggingPage.MainNavigationMenuBar().find('li').should('have.length', 6);
        timeLoggingPage.showTodaysDate().contains(new Date().getDate());

        cy.get('.main-nav__link').contains('Task').click({force:true})
        cy.get('button.btn').contains('Create Task').click({force:true})
        cy.get('[id="taskDetailsForm.name"]').type(taskName)
        cy.get('[id="taskDetailsForm.description"]').type('tasko aprasymas')
        cy.get('.Select-arrow').click()
        cy.get('[aria-label="Yes"]').click()
        cy.get('[id="taskDetailsForm.rate"]').clear('0.000').type('10.51')
        cy.get('button.btn').contains('Save').click({force:true})   

        cy.get('.main-nav__link').contains('Task').click({force:true})
        cy.get('.field__text').eq('0').type('zzz')      
    })
})