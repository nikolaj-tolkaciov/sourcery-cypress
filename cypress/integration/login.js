import LoginPage from '../objects/loginPage';
import TimeLoggingPage from '../objects/timeLoggingPage';
import PageComponents from '../objects/pageComponents';
import Common from '../objects/common';

const loginPage = new LoginPage();
const timePage = new TimeLoggingPage();
const pageComponents = new PageComponents();
const common = new Common();

describe('Sourcebooks login', function() {

    it('Should display validation for empty user after attempted login', function () {
        
        loginPage.visit();
        loginPage.getUserValidationIndicator().should('not.visible');
        loginPage.clickSubmitButton();
        loginPage.getUserValidationIndicator().should('be.visible');
    })

    it('Should be able to login with role Team Lead', function () {

        loginPage.visit();
        loginPage.clickUserDropDown();
        loginPage.clickSpecificUserFromDropDown("Dominykas Poškus");
        loginPage.clickRoleDropDown();
        loginPage.clickSpecificRoleFromDropDown("Team Lead");
        loginPage.clickSubmitButton();

        common.checkIfUrlIncludes('/time-logging');
        pageComponents.getPageTitle().contains("Timesheets");
        timePage.getCalendar().should('be.visible');
        timePage.getTileForm().should('be.visible');
        pageComponents.checkIfUserTitleContains("Dominykas Poškus");
        pageComponents.checkMainNavigationTabsCount(2);
    })

    it('Calendar should show todays date', function(){
        timePage.getTodayInCalendar().contains((new Date()).getDate());
    })

    let Roles = [
        {
            "name": "User",
            "tabs": 1
        },
        {
            "name": "Team Lead",
            "tabs": 2
        },
        {
            "name": "Manager",
            "tabs": 5
        },
        {
            "name": "Accountant",
            "tabs": 5
        }, 
        {
            "name": "Admin",
            "tabs": 6
        }];

    for(let i = 0; i < Roles.length; i++){
        it('Verify that ' + Roles[i].name + ' can log in and should see ' + Roles[i].tabs + ' tabs', function(){
            
          loginPage.visit();
          loginPage.clickUserDropDown();
          loginPage.clickSpecificUserFromDropDown('Dominykas Poškus');
          loginPage.clickRoleDropDown();
          loginPage.clickSpecificRoleFromDropDown(Roles[i].name);
          loginPage.clickSubmitButton();

          pageComponents.checkIfUserTitleContains('Dominykas Poškus');
          pageComponents.checkMainNavigationTabsCount(Roles[i].tabs);

          pageComponents.getActiveNavigationTab().contains("Time Logging");
          pageComponents.checkIfActiveTabIsThisColor('rgb(64, 76, 237)');

          pageComponents.getUserInfoTitle().click();
          pageComponents.clickLogoutButton();
        })
    }
})
