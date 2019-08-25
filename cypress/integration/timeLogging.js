import Common from '../objects/common';
import TimeLoggingPage from '../objects/timeLoggingPage';

const common = new Common();
const timeLoggingPage = new TimeLoggingPage();
const todaysDate = Cypress.moment().format('YYYY-DD-MM')
const todaysDay = Cypress.moment().format('DD')

describe('Sourcebooks time logging by an Admin (T-6)', function() {

    it('Should be able to log time with an Admin role, create a time log, and check if the new time log is created', function () {

        cy.visit('/');
        common.getUserDropDown().click({force:true});
        common.getSpecificUserFromDropDown('Ieva Stonkaitė').click();
        common.getRoleDropDown().click({force:true});
        common.getSpecificRoleFromDropDown('Admin').click();
        common.getButton().click();
        common.getUserTitle().contains('Ieva Stonkaite');

        cy.visit('/time-logging');
        timeLoggingPage.getCalendarTodaysDate().contains(todaysDay);
        timeLoggingPage.getProjectNameDropdown().find('[value]').click({force:true}).type('JJ1 Project{enter}');
        timeLoggingPage.getTaskNameDropdown().find('[value]').click({force:true}).type('JJ1{enter}');
        timeLoggingPage.getDescriptionField().type('TestDescription' + ' ' + todaysDate);
        timeLoggingPage.getHoursField().type(1);
        common.getButton().click();

        timeLoggingPage.getCreatedTimeLogName().contains('JJ1 Project');
        timeLoggingPage.getCreatedTimeLogTaskName().contains('JJ1');
        timeLoggingPage.getCreatedTimeLogDescription().contains('TestDescription' + ' ' + todaysDate);
        timeLoggingPage.getCreatedTimeLogHours().contains(10);           
    })
   
})