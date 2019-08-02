import LoginPage from '../objects/LoginPage';

const Liepa = new LoginPage()

describe('Sourcebooks login', function() {

    it('Should display validation for empty user after attempted loggin', function () {
 
        Liepa.visit();
        Liepa.getUserValidationIndicator().should('not.visible')
        Liepa.getSubmitButton().click();
        Liepa.getUserValidationIndicator().should('be.visible')
    })
 
    it('Should be able to login with role User', function () {
 
        Liepa.visit();
        Liepa.getLoginForm().click({force:true});
        Liepa.getSpecificUserFromDropDown("Liepa Popescu").click();
        Liepa.getLogin().click({force:true});
        Liepa.getUserLabel("User").click();
        Liepa.getSubmitButton().click();
 
        Liepa.getUrl().should('include', '/time-logging');
        Liepa.getTimesheets().contains('Timesheets')
        Liepa.getCalendar().should('be.visible')
        Liepa.getTileForm().should('be.visible')
        Liepa.getUserInfo().contains('Liepa Popescu');
        Liepa.getMainNav().find('li').should('have.length', 1);
        Liepa.getMainNamLink().should('have.css','color', 'rgb(64, 76, 237)');
 
    })
    
    it('Should be able to login with role Team Lead', function () {
 
        Liepa.visit();
        Liepa.getLoginForm().click({force:true});
        Liepa.getSpecificUserFromDropDown("Liepa Popescu").click();
        Liepa.getLogin().click({force:true});
        Liepa.getUserLabel("Team Lead").click();
        Liepa.getSubmitButton().click();
 
        Liepa.getUrl().should('include', '/time-logging');
        Liepa.getTimesheets().contains('Timesheets')
        Liepa.getCalendar().should('be.visible')
        Liepa.getTileForm().should('be.visible')
        Liepa.getUserInfo().contains('Liepa Popescu');
        Liepa.getMainNav().find('li').should('have.length', 2);
        Liepa.getMainNamLink().should('have.css','color', 'rgb(64, 76, 237)');
 
    })

 
    it('Should be able to login with role Manager', function () {
 
        Liepa.visit();
        Liepa.getLoginForm().click({force:true});
        Liepa.getSpecificUserFromDropDown("Liepa Popescu").click();
        Liepa.getLogin().click({force:true});
        Liepa.getUserLabel("Manager").click();
        Liepa.getSubmitButton().click();
 
        Liepa.getUrl().should('include', '/time-logging');
        Liepa.getTimesheets().contains('Timesheets')
        Liepa.getCalendar().should('be.visible')
        Liepa.getTileForm().should('be.visible')
        Liepa.getUserInfo().contains('Liepa Popescu');
        Liepa.getMainNav().find('li').should('have.length', 5);
        Liepa.getMainNamLink().should('have.css','color', 'rgb(64, 76, 237)');
 
    })

    it('Should be able to login with role Accountant', function () {
 
        Liepa.visit();
        Liepa.getLoginForm().click({force:true});
        Liepa.getSpecificUserFromDropDown("Liepa Popescu").click();
        Liepa.getLogin().click({force:true});
        Liepa.getUserLabel("Accountant").click();
        Liepa.getSubmitButton().click();
 
        Liepa.getUrl().should('include', '/time-logging');
        Liepa.getTimesheets().contains('Timesheets')
        Liepa.getCalendar().should('be.visible')
        Liepa.getTileForm().should('be.visible')
        Liepa.getUserInfo().contains('Liepa Popescu');
        Liepa.getMainNav().find('li').should('have.length', 5);
        Liepa.getMainNamLink().should('have.css','color', 'rgb(64, 76, 237)');
 
    })
 
    it('Should be able to login with role Admin', function () {
 
        Liepa.visit();
        Liepa.getLoginForm().click({force:true});
        Liepa.getSpecificUserFromDropDown("Liepa Popescu").click();
        Liepa.getLogin().click({force:true});
        Liepa.getUserLabel("Admin").click();
        Liepa.getSubmitButton().click();
 
        Liepa.getUrl().should('include', '/time-logging');
        Liepa.getTimesheets().contains('Timesheets')
        Liepa.getCalendar().should('be.visible')
        Liepa.getTileForm().should('be.visible')
        Liepa.getUserInfo().contains('Liepa Popescu');
        Liepa.getMainNav().find('li').should('have.length', 6);
        Liepa.getMainNamLink().should('have.css','color', 'rgb(64, 76, 237)');
 
    })
 })
 

