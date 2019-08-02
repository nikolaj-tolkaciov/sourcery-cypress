import LoginPage from '../objects/loginPage';
const loginPage = new LoginPage()

import TimeLogging from '../objects/timeLogging';
const timeLogging = new TimeLogging();

import PageComponents from '../objects/pageComponents';
const pageComponents = new PageComponents();

describe('Sourcebooks login', function() {

    let roles = [
        {
            name: "User",
            tabs: '1'
        },
        {
            name: "Team Lead",
            tabs: '2'
        },
        {
            name: "Manager",
            tabs: '5'
        },
        {
            name: "Accountant",
            tabs: '5'
        },
        {
            name: "Admin",
            tabs: '6'
        }
    ];

    roles.forEach(function(element) {
    it(`Verify if the ${element.name} role can log in and check if "Time Logging" color is blue`, function() {
        
        loginPage.visit();
        loginPage.getLoginFieldUser().click({force:true});
        loginPage.getSpecificUserFromDropDown("Aistė Laugalytė").click();
        loginPage.getLoginFieldRole().click({force:true});
        loginPage.getSpecificrRoleFromDropDown(`${element.name}`).click();
        pageComponents.getSubmitButton().click();

        pageComponents.getUrl().should('include', '/time-logging');
        timeLogging.getPageTitle().contains('Timesheets')
        timeLogging.getCalendar().should('be.visible')
        timeLogging.getTileForm().should('be.visible')
        pageComponents.getUserName().contains('Aiste Laugalyte');
        pageComponents.getTabsCount().should('have.length', element.tabs);
        timeLogging.assertTodayDate()
        pageComponents.getActiveTabColor()
        })
    })
})