import LoginPage from '../objects/loginPage'
import TimeLoginPage from '../objects/timeLoginPage'

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

        //cy.get('[id="loginForm.userId"]').click({force:true});
        loginPage.getUserForm().click({force:true})

        //cy.get('[aria-label="Ugne Lekstutiene"]').click();
        loginPage.getUserOption("Ugne Lekstutiene").click()

        //cy.get('[id="loginForm.role"]').click({force:true});
        loginPage.getLoginForm().click({force:true})


        //cy.get('[aria-label="User"]').click();
        loginPage.getLabel('User').click()

        //cy.get('[type="submit"]').click();
        loginPage.getSubmit().click()


        //timeLoginPage

        //cy.url().should('include', '/time-logging');
        timeLoginPage.getURL('.time-logging')
        

        //cy.get('.page__title').contains('Timesheets')
        timeLoginPage.getPageTitle('Timesheets')

        //cy.get('.calendar').should('be.visible')
        timeLoginPage.getCalendarVisable('be.visible')


        //cy.get('.calendar--today').contains(new Date().getDate());
        timeLoginPage.getCalendarToday(new Date().getDate())


        //cy.get('.tile.form').should('be.visible')
        timeLoginPage.getFileForm('be.visible')

        //cy.get('.user-info__title').contains('Ugne Lekstutiene');
        timeLoginPage.getUserInfoTitle('Ugne Lekstutiene')


        //cy.get('.main-nav').find('li').should('have.length', 1);
        timeLoginPage.getMainLength('1')  
        
        //cy.get('.main-nav__link--active').contains('Time Logging').should('have.css' , 'color' , 'rgb(64, 76, 237)')
        timeLoginPage.getTimeLoggingColored('rgb(64, 76, 237)')
    })  

    it('Should be able to login with role Team Lead and should see appropriate tabs', function () {

        loginPage.visit()
        loginPage.getUserForm().click({force:true})
        loginPage.getUserOption("Ugne Lekstutiene").click()
        loginPage.getLoginForm().click({force:true})
        loginPage.getLabel('Team Lead').click()
        loginPage.getSubmit().click()
        timeLoginPage.getURL('.time-logging')        
        timeLoginPage.getPageTitle('Timesheets')
        timeLoginPage.getFileForm('be.visible')
        timeLoginPage.getCalendarToday(new Date().getDate())
        timeLoginPage.getFileForm('be.visible')
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
        timeLoginPage.getURL('.time-logging')        
        timeLoginPage.getPageTitle('Timesheets')
        timeLoginPage.getFileForm('be.visible')
        timeLoginPage.getCalendarToday(new Date().getDate())
        timeLoginPage.getFileForm('be.visible')
        timeLoginPage.getUserInfoTitle('Ugne Lekstutiene')
        timeLoginPage.getMainLength('5')
        timeLoginPage.getTimeLoggingColored('rgb(64, 76, 237)')
    })

    it('Should be able to login with role Accountant and should see appropriate tabs', function () {

        loginPage.visit()
        loginPage.getUserForm().click({force:true})
        loginPage.getUserOption("Ugne Lekstutiene").click()
        loginPage.getLoginForm().click({force:true})
        loginPage.getLabel('Accountant').click()
        loginPage.getSubmit().click()
        timeLoginPage.getURL('.time-logging')        
        timeLoginPage.getPageTitle('Timesheets')
        timeLoginPage.getFileForm('be.visible')
        timeLoginPage.getCalendarToday(new Date().getDate())
        timeLoginPage.getFileForm('be.visible')
        timeLoginPage.getUserInfoTitle('Ugne Lekstutiene')
        timeLoginPage.getMainLength('5')
        timeLoginPage.getTimeLoggingColored('rgb(64, 76, 237)')
    })

    it('Should be able to login with role Admin and should see appropriate tabs', function () {

        loginPage.visit()
        loginPage.getUserForm().click({force:true})
        loginPage.getUserOption("Ugne Lekstutiene").click()
        loginPage.getLoginForm().click({force:true})
        loginPage.getLabel('Admin').click()
        loginPage.getSubmit().click()
        timeLoginPage.getURL('.time-logging')        
        timeLoginPage.getPageTitle('Timesheets')
        timeLoginPage.getFileForm('be.visible')
        timeLoginPage.getCalendarToday(new Date().getDate())
        timeLoginPage.getFileForm('be.visible')
        timeLoginPage.getUserInfoTitle('Ugne Lekstutiene')
        timeLoginPage.getMainLength('6')
        timeLoginPage.getTimeLoggingColored('rgb(64, 76, 237)')
    })





})