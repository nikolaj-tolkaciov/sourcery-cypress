import LoginPage from '../objects/loginPage'
import TimeLoggingPage from '../objects/timeLoggingPage';

describe('Sourcebooks login', function() {

    const loginPage = new LoginPage()  
    const timeLogging = new TimeLoggingPage();    

    it('Should display validation for empty user after attempted loggin', function () {
        
        loginPage.visit()
        loginPage.getValidationError().should('not.visible')
        loginPage.submitButton().click();
        loginPage.getValidationError().should('be.visible')
    })

    const roles= [['User', 1], ["Team Lead", 2], ['Manager', 5], ['Accountant', 5], ['Admin', 6]]

    for (let i = 0; i < roles.length; i++) {

        it(`Should be able to login with role ${roles[i][0]}`, function () {

                loginPage.visit()
                loginPage.getUserId().click({force:true});
                loginPage.getUserName("Dovilė Martinkutė").click();
                loginPage.getRole().click({force:true});
                loginPage.selectRole(roles[i][0]).click();
                loginPage.submitButton().click();

                cy.url().should('include', '/time-logging');
                timeLogging.getPageTitle().contains('Timesheets');                          
                timeLogging.calendar().should('be.visible')
                timeLogging.titleForm().should('be.visible')
                timeLogging.infoTitle().contains('Dovile Martinkute');
                timeLogging.mainNav().find('li').should('have.length', roles[i][1]);
                timeLogging.date().contains(new Date().getDate());
                timeLogging.button().should('have.css', 'color', 'rgb(64, 76, 237)');
                timeLogging.infoTitle().click({force:true});   
                timeLogging.logout().click({force:true});
        })
    }
}) 