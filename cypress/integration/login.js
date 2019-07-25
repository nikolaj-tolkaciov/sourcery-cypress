import LoginPage from '../objects/loginPage'
import TimeLoggingPage from '../objects/timeLoggingPage'

describe('Sourcebooks login', function() {

    const loginPage = new LoginPage()
    const timeLoggingPage = new TimeLoggingPage()

    it('Should display validation for empty user after attempted loggin', function () {
       
        loginPage.visit()
        loginPage.getUserValidationError().should('not.visible')
        loginPage.getLoginButton().click();
        loginPage.getUserValidationError().should('be.visible')
    })

    const roles = [
        {name:'User', numberOfTabs: 1},
        {name:"Team Lead", numberOfTabs: 2},
        {name:'Manager', numberOfTabs: 5},
        {name:'Accountant', numberOfTabs: 5},
        {name:'Admin', numberOfTabs: 6}
    ]

    for(let role of roles){

        it(`Should be able to login with role ${role.name}`, function () {
            
            loginPage.visit()
            loginPage.getLoginFormUserId().click({force:true})
            loginPage.getOption("Miglė Budrytė").click()
            loginPage.getLoginFormRole().click({force:true})
            loginPage.getOption(role.name).click()
            loginPage.getLoginButton().click()
    
            timeLoggingPage.getUrl().should('include', '/time-logging')
            timeLoggingPage.getPageTitle().contains('Timesheets')
            timeLoggingPage.getCalendar().should('be.visible')
            timeLoggingPage.getCalendarToday().contains(new Date().getDate());
            timeLoggingPage.getLogHoursForm().should('be.visible')
            timeLoggingPage.getUserInfoTitle().contains('Migle Budryte')
            timeLoggingPage.findMainNavTabs().should('have.length', role.numberOfTabs)
            timeLoggingPage.getMainNavActiveLink().contains('Time Logging').should('have.css', 'color', 'rgb(64, 76, 237)')
            timeLoggingPage.getUserInfoTitle().click({force:true})
            timeLoggingPage.getLogoutButton().click({force:true})
        })
    }  
})