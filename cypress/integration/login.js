import LoginPage from '../objects/loginPage';
const loginPage = new LoginPage()

import TimeLogging from '../objects/timeLogging';
const timeLogging = new TimeLogging();

import PageComponents from '../objects/pageComponents';
const pageComponents = new PageComponents();

describe('Sourcebooks login', function() {

    it('Should display validation for empty user after attempted loggin', function () {
        
        loginPage.visit();
        loginPage.getUserValidationIndicator().should('not.visible')
        pageComponents.getSubmitButton().click();
        loginPage.getUserValidationIndicator().should('be.visible')
    })

    it('Should be able to login with role Team Lead and check if date is todays date', function () {

        loginPage.visit();
        loginPage.getLoginFieldUser().click({force:true});
        loginPage.getSpecificUserFromDropDown("Aistė Laugalytė").click();
        loginPage.getLoginFieldRole().click({force:true});
        loginPage.getSpecificrRoleFromDropDown("Team Lead").click();
        pageComponents.getSubmitButton().click();

        pageComponents.getUrl().should('include', '/time-logging');
        timeLogging.getPageTitle().contains('Timesheets')
        timeLogging.getCalendar().should('be.visible')
        timeLogging.getTileForm().should('be.visible')
        pageComponents.getUserName().contains('Aiste Laugalyte');
        pageComponents.getTabsCount().should('have.length', 2);
        timeLogging.assertTodayDate()
    })
})