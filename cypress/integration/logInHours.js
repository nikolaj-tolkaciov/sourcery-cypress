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
        
        let projectName = 'Acquire item | id-test';
        let taskName = 'Deliver tea to Party leader';
        let description = 'Discrete delivery was made: ID - '+ Math.random().toString(36).substring(2, 15);
        let clickEnter = '{downarrow}{enter}';
        let spentHours = 0.5;
        //choosing todays date
        timeLoggingPage.getNavigationPanelTimeLogging().should('be.visible');
        timeLoggingPage.getNavigationPanelTimeLogging().click({force:true});
        timeLoggingPage.getCalendarDate().contains(new Date().getDate()).click({force:true});
        //Filling mandatory info
        timeLoggingPage.getProjectInputfieldDropdown().click({force:true});
        timeLoggingPage.getProjectInputfield().type(projectName);
        timeLoggingPage.getProjectInputfield().type(clickEnter);
        timeLoggingPage.getTaskInputfieldDropdown().click({force:true});
        timeLoggingPage.getTaskInputfield().type(taskName);
        timeLoggingPage.getTaskInputfield().type(clickEnter);
        timeLoggingPage.getDescriptionInputfield().click({force:true});
        timeLoggingPage.getDescriptionInputfield().type(description);
        timeLoggingPage.getHoursInputfield().click({force:true});
        timeLoggingPage.getHoursInputfield().type(spentHours);
        timeLoggingPage.getLogHoursButton().should('be.enabled');
        timeLoggingPage.getLogHoursButton().click();
        timeLoggingPage.getPageTitle().click();
        cy.wait(100)
        cy.reload();
        //timeLoggingPage.checkIfNewRecordAppearedWithCorrectData(description);
        timeLoggingPage.checkgg(projectName, taskName, description, spentHours);
   
    })
})