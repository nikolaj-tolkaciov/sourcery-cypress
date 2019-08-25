import Common from '../objects/common';
import TimeEntriesPage from '../objects/timeEntriesPage';

const common = new Common();
const timeEntriesPage = new TimeEntriesPage();
const todaysDate = Cypress.moment().format('MM/DD/YYYY');
const todaysDate1 = Cypress.moment().format('YYYY-MM-DD');

describe('Sourcebooks time entries check by an Admin (T-7)', function() {

    it('Should be able to check time entries with an Admin role', function () {

        cy.visit('/');
        common.getUserDropDown().click({force:true});
        common.getSpecificUserFromDropDown('Ieva Stonkaitė').click();
        common.getRoleDropDown().click({force:true});
        common.getSpecificRoleFromDropDown('Admin').click();
        common.getButton().click();
        common.getUserTitle().contains('Ieva Stonkaite');

        cy.visit('/time-entries');
        timeEntriesPage.getProjectField().click();
        timeEntriesPage.getSearchField().type('JJ1 Project').wait(2000);
        timeEntriesPage.getCheckbox().click();
        timeEntriesPage.getSaveButton().click({force:true});
        timeEntriesPage.getProjectEmployeeField().click();
        timeEntriesPage.getSearchField().type('Stonkaite').wait(2000);
        timeEntriesPage.getCheckbox().click();
        timeEntriesPage.getSaveButton().click({force:true});
        timeEntriesPage.getFromField().clear().type(todaysDate);
        timeEntriesPage.getToField().clear().type(todaysDate);
        timeEntriesPage.getTaskDropdown().click({force:true}).type('JJ1').wait(2000);
        timeEntriesPage.getFilterButton().click();

        timeEntriesPage.getCreatedProjectName().contains('JJ1 Project');
        timeEntriesPage.getCreatedProjectDate().contains(todaysDate1);
        timeEntriesPage.getCreatedProjectEmployee().contains('Stonkaite, Ieva');
        timeEntriesPage.getCreatedProjectTask().contains('JJ1');          
    })
   
})