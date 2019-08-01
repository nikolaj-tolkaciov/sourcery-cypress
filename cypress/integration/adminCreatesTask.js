import LoginPage from '../objects/loginPage';
import TimeLoggingPage from '../objects/timeLoggingPage';
import adminCreatesTask from '../objects/adminPage';


const loginPage = new LoginPage()
const timeLoggingPage = new TimeLoggingPage()
const adminPage = new adminCreatesTask()
let taskName=Math.random().toString('36').substring('2, 15')
let money=Math.floor(Math.random() * 100.2 + 1)

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
        timeLoggingPage.getMainNavigationMenuBar().find('li').should('have.length', 6);
        timeLoggingPage.showTodaysDate().contains(new Date().getDate());

        timeLoggingPage.getTab().contains('Task').click({force:true})
        adminPage.showButton().contains('Create Task').click({force:true})
        adminPage.showTaskNameField().type(taskName)
        adminPage.showDescriptionField().type('tasko aprasymas')
        adminPage.getDropdownForBilling().click()
        adminPage.getYesForBilling().click()
        adminPage.getRateField().clear('0.000').type(money)
        adminPage.showButton().contains('Save').click({force:true})   

        timeLoggingPage.getTab().contains('Task').click({force:true})
        //adminPage.showTaskNameFieldForSearch().type('dfefe')
        cy.get('.field__text').eq(0).type('ehfjehkef')  
    })
})