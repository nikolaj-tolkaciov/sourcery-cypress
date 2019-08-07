import LoginPage from "../objects/loginPage";
import TimeLoginPage from '../objects/timeLoginPage';

const loginPage = new LoginPage()
const timeLoginPage = new TimeLoginPage()

describe('Sourcebooks login', function() {

    it('Should display validation for empty user after attempted loggin', function () {
        
        loginPage.visit()
        loginPage.getValidationError().should('not.visible')
        loginPage.getSubmit().click()
        loginPage.getValidationError().should('be.visible')
    })

    it('Should be able to login with role User and should see today date', function () {
        
        loginPage.visit()
        loginPage.getUserForm().click({force:true})
        loginPage.getUserOption("Ugne Lekstutiene").click()
        loginPage.getLoginForm().click({force:true})
        loginPage.getLabel('User').click()
        loginPage.getSubmit().click()
        timeLoginPage.getURL().should('include', '/time-logging')
        timeLoginPage.getPageTitle('Timesheets').contains('Timesheets')
        timeLoginPage.getCalendarVisable().should('be.visible')
        timeLoginPage.getCalendarToday().contains(new Date().getDate())
        timeLoginPage.getTimeEntryForm('be.visible')
        timeLoginPage.getUserInfoTitle('Ugne Lekstutiene').contains('Ugne Lekstutiene')
        timeLoginPage.getMainLength().find('li').should('have.length', 1)  
        timeLoginPage.getTimeLoggingColored('rgb(64, 76, 237)').contains('Time Logging').should('have.css' , 'color' , 'rgb(64, 76, 237)')
    })  

    it('Should be able to login with role Team Lead and should see appropriate tabs', function () {

        loginPage.visit()
        loginPage.getUserForm().click({force:true})
        loginPage.getUserOption("Ugne Lekstutiene").click()
        loginPage.getLoginForm().click({force:true})
        loginPage.getLabel('Team Lead').click()
        loginPage.getSubmit().click()
        timeLoginPage.getURL().should('include', '/time-logging')        
        timeLoginPage.getPageTitle('Timesheets')
        timeLoginPage.getCalendarVisable().should('be.visible')
        timeLoginPage.getCalendarToday().contains(new Date().getDate())
        timeLoginPage.getTimeEntryForm('be.visible')
        timeLoginPage.getUserInfoTitle('Ugne Lekstutiene')
        timeLoginPage.getMainLength('2')
        timeLoginPage.getTimeLoggingColored('rgb(64, 76, 237)')
    })

    it('Should be able to login with role Manager and should see appropriate tabs', function () {

        loginPage.visit()
        loginPage.getUserForm().click({force:true})
        loginPage.getUserOption("Ugne Lekstutiene").click()
        loginPage.getLoginForm().click({force:true})
        loginPage.getLabel('Manager').click()
        loginPage.getSubmit().click()
        timeLoginPage.getURL().should('include', '/time-logging')        
        timeLoginPage.getPageTitle('Timesheets').contains('Timesheets')
        timeLoginPage.getTimeEntryForm('be.visible')
        timeLoginPage.getCalendarToday().contains(new Date().getDate())
        timeLoginPage.getUserInfoTitle('Ugne Lekstutiene').contains('Ugne Lekstutiene')
        timeLoginPage.getMainLength('5').find('li').should('have.length', 5)
        timeLoginPage.getTimeLoggingColored('rgb(64, 76, 237)').contains('Time Logging').should('have.css' , 'color' , 'rgb(64, 76, 237)')
    })

    it('Should be able to login with role Accountant and should see appropriate tabs', function () {

        loginPage.visit()
        loginPage.getUserForm().click({force:true})
        loginPage.getUserOption("Ugne Lekstutiene").click()
        loginPage.getLoginForm().click({force:true})
        loginPage.getLabel('Accountant').click()
        loginPage.getSubmit().click()
        timeLoginPage.getURL().should('include', '/time-logging')        
        timeLoginPage.getPageTitle('Timesheets').contains('Timesheets')
        timeLoginPage.getTimeEntryForm('be.visible')
        timeLoginPage.getCalendarToday().contains(new Date().getDate())
        timeLoginPage.getUserInfoTitle('Ugne Lekstutiene')
        timeLoginPage.getMainLength('5')
        timeLoginPage.getTimeLoggingColored('rgb(64, 76, 237)').contains('Time Logging').should('have.css' , 'color' , 'rgb(64, 76, 237)')
    })

    it('Should be able to login with role Admin and should see appropriate tabs', function () {

        loginPage.visit()
        loginPage.getUserForm().click({force:true})
        loginPage.getUserOption("Ugne Lekstutiene").click()
        loginPage.getLoginForm().click({force:true})
        loginPage.getLabel('Admin').click()
        loginPage.getSubmit().click()
        timeLoginPage.getURL().should('include', '/time-logging')        
        timeLoginPage.getPageTitle('Timesheets').contains('Timesheets')
        timeLoginPage.getTimeEntryForm('be.visible')
        timeLoginPage.getCalendarToday().contains(new Date().getDate())
        timeLoginPage.getUserInfoTitle('Ugne Lekstutiene').contains('Ugne Lekstutiene')
        timeLoginPage.getMainLength('6').find('li').should('have.length', 6)
        timeLoginPage.getTimeLoggingColored('rgb(64, 76, 237)').contains('Time Logging').should('have.css' , 'color' , 'rgb(64, 76, 237)')
    })
})