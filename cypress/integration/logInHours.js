import LoginPage from '../objects/loginPage';
import TimeLoggingPage from '../objects/timeLoggingPage';

const loginPage = new LoginPage();
const timeLoggingPage = new TimeLoggingPage;

describe('Sourcebooks logging time', function() {

    beforeEach(() => {
        cy.loginAs('Admin');
        loginPage.visit();
    })

    it('Admin successfully logs time', function() {
        
        timeLoggingPage.getNavigationPanelTimeLogging().should('be.visible');
        timeLoggingPage.getNavigationPanelTimeLogging().click({force:true});
        timeLoggingPage.getCalendarDate().contains(new Date().getDate()).click({force:true});
        
   
   
    })
})