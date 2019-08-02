import LoginPage from '../objects/loginPage';

const loginPage = new LoginPage();

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

        loginPage.checkIfUrlIncludes('/time-logging');
        loginPage.getPageTitle().contains("Timesheets");
        loginPage.getCalendar().should('be.visible');
        loginPage.getTileForm().should('be.visible');
        loginPage.checkIfUserTitleContains("Dominykas Poškus");
        loginPage.checkMainNavigationTabsCount(2);
    })

    it('Calendar should show todays date', function(){
        loginPage.getTodayInCalendar().contains((new Date()).getDate());
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

        loginPage.checkIfUserTitleContains('Dominykas Poškus');
        loginPage.checkMainNavigationTabsCount(Roles[i].tabs);

        loginPage.getActiveNavigationTab().contains("Time Logging");
        loginPage.checkIfActiveTabIsThisColor('rgb(64, 76, 237)');

        loginPage.getUserInfoTitle().click();
        loginPage.clickLogoutButton();
        })
    }
})