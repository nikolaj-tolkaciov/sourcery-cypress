import LoginPage from '../objects/loginPage';
import General from '../objects/general';
import TimeLogging from '../objects/timeLogging';

const loginPage = new LoginPage();
const general = new General();
const timeLogging = new TimeLogging();

describe('Sourcebooks login', function() {

    it('Should display validation for empty user after attempted loggin', function () {
        
        loginPage.visit();
        loginPage.getUserValidationIndicator().should('not.visible')
        loginPage.getSubmitButton().click();
        loginPage.getUserValidationIndicator().should('be.visible')
    })

    it('Should be able to login with role User', function () {

        loginPage.visit();
        loginPage.openUserDropDown().click({force:true});
        loginPage.getSpecificValueFromDropDown("Demo User").click();
        loginPage.openRoleDropDown().click({force:true});
        loginPage.getSpecificValueFromDropDown("Team Lead").click();
        loginPage.getSubmitButton().click();

        general.urlShouldInclude('/time-logging');
        general.getPageTitle().contains('Timesheets');
        timeLogging.getCalendar().should('be.visible');
        timeLogging.getTileForm().should('be.visible');
        general.getLoggedUserName().contains('Demo User');
        general.getMainMenuItems().should('have.length', 2);
    })
    
    it('Validate today\'s date', function () {

        loginPage.visit();
        loginPage.openUserDropDown().click({force:true});
        loginPage.getSpecificValueFromDropDown("Kamilė Stugytė").click();
        loginPage.openRoleDropDown().click({force:true});
        loginPage.getSpecificValueFromDropDown("Team Lead").click();
        loginPage.getSubmitButton().click();
        timeLogging.getTodaysDate().contains(new Date().getDate());
    })

    it('Verify all user roles can log in and should see appropriate tabs', function () {
        
        const rolesArray = ['User', 'Team Lead', 'Manager', 'Accountant', 'Admin'];        

        function testFunction(currentRole) {
            
            loginPage.visit();
            loginPage.openUserDropDown().click({force:true});
            loginPage.getSpecificValueFromDropDown("Kamilė Stugytė").click();
            loginPage.openRoleDropDown().click({force:true});
            loginPage.getSpecificValueFromDropDown(currentRole).click();
            loginPage.getSubmitButton().click();

            //checks if correct user name is displayed
            general.getLoggedUserName().contains('Kamile Stugyte');

            //checks if correct number of tabs is displayed in menu list
            switch(currentRole) {
                case 'User' :
                    general.getMainMenuItems().should('have.length', 1);
                    break;
                case 'Team Lead' :
                    general.getMainMenuItems().should('have.length', 2);
                    break;
                case 'Manager' :
                    general.getMainMenuItems().should('have.length', 5);
                    break;
                case 'Accountant' :
                    general.getMainMenuItems().should('have.length', 5);
                    break;
                case 'Admin' :
                    general.getMainMenuItems().should('have.length', 6);
                    break;
            }

            //checks if Time logging item is selected
            general.getSelectedMenuItem().contains('Time Logging');
            //checks if it's marked in blue
            general.getSelectedMenuItem().should('have.css', 'color', 'rgb(64, 76, 237)');
            general.getUserButton().click();
            general.getLogoutButton().click();
        }

        rolesArray.forEach(testFunction);        
    })
})