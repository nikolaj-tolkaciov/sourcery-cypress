import LoginPage from '../objects/loginPage';
import TimeLoggingPage from '../objects/timeLoggingPage';

const loginPage = new LoginPage();
const timeLoggingPage = new TimeLoggingPage();

describe('Sourcebooks login', function() {

    it('Should display validation for empty user after attempted loggin', function () {

        loginPage.visit();
        loginPage.getValidationError().should('not.visible')
        loginPage.getLoginbutton().click();
        loginPage.getValidationError().should('be.visible')

    })

    const rolesArr= [['User', 1], ["Team Lead", 2], ['Manager', 5], ['Accountant', 5], ['Admin', 6]]

    for (let i=0; i<rolesArr.length;i++) {

        it(`Should be able to login with role ${rolesArr[i][0]}`, function () {

                //console.log(i); 
                loginPage.visit();
                loginPage.getUserNameDropdown().click({force:true});
                loginPage.getUserName().click();
                loginPage.getRoleDropdown().click({force:true});
                loginPage.getRole(rolesArr, i).click();
                loginPage.getLoginbutton().click();
                timeLoggingPage.urlIncludesCheck('/time-logging');
                timeLoggingPage.getPageTitle().contains('Timesheets')
                timeLoggingPage.getCalendar().should('be.visible')
                timeLoggingPage.getLogHoursForm().should('be.visible')
                timeLoggingPage.getUserNameTitle().contains('Vitalij Janukevic');
                timeLoggingPage.checkNavigationPanelItemNumber().should('have.length', rolesArr[i][1]);
                timeLoggingPage.getCalendarDate().contains(new Date().getDate());
                timeLoggingPage.checkSelectedNavPanelItemIsBlue().should('have.css', 'color', 'rgb(64, 76, 237)');
                timeLoggingPage.getUserNameTitle().click({force:true});
                timeLoggingPage.getLogOutButton().click({force:true});
        })
    }
})