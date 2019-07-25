import LoginPage from '../objects/loginPage';
import TimeLoggingPage from '../objects/timeLoggingPage';
import TasksPage from '../objects/tasksPage';
import ClientPage from '../objects/ClientPage';

const loginPage = new LoginPage();
const timeLoggingPage = new TimeLoggingPage();
const tasksPage = new TasksPage();
const clientPage = new ClientPage();

describe('Sourcebooks login', function() {

    beforeEach(() => {
        cy.loginAs('Admin');
        loginPage.visit();
    })

    it('Admin should create new client', function() {

        timeLoggingPage.getNavigationPanelClients().should('be.visible');
        timeLoggingPage.getNavigationPanelClients().click({force:true});
        clientPage.getCreateClientsButton().should('be.visible');
        clientPage.getCreateClientsButton().click({force:true});
       // clientPage.getCreateClientNameInputField().type(`${taskName}`); //parašyti
    })
})