import LoginPage from '../objects/loginPage';
import TimeLoggingPage from '../objects/timeLoggingPage';
import ClientPage from '../objects/ClientPage';

const loginPage = new LoginPage();
const timeLoggingPage = new TimeLoggingPage();
const clientPage = new ClientPage();

describe('Sourcebooks AdminNewClient', function() {

    beforeEach(() => {
        cy.loginAs('Admin');
        loginPage.visit();
    })

    let OrganisationName = Math.random().toString(36).substring(2, 15);
    let ClientEmail = Math.random().toString(36).substring(2, 15) + '@Dungeon.yolo';

    let OrganisationName12 = Math.random().toString(36).substring(2, 15);
    let ClientEmail23 = Math.random().toString(36).substring(2, 15) + '@Dungeon.yolo';

    it('Admin should create new client', function() {

        //Client Page pasirinkimas
        timeLoggingPage.getNavigationPanelClients().should('be.visible');
        timeLoggingPage.getNavigationPanelClients().click({force:true});

        // visu veiksmus Kad sukurti clienta atlikimas
        clientPage.getCreateClientsButton().should('be.visible');
        clientPage.getCreateClientsButton().click({force:true});
        clientPage.getCreateOrganisationNameInputField().should('be.visible');
        clientPage.getCreateOrganisationNameInputField().type(OrganisationName);
        clientPage.getCreateClientFirstNameInputField().should('be.visible');
        clientPage.getCreateClientFirstNameInputField().type('Welf');
        clientPage.getCreateClientLastNameInputField().should('be.visible');
        clientPage.getCreateClientLastNameInputField().type('Crozzo');
        clientPage.getCreateClientEmailInputField().should('be.visible');
        clientPage.getCreateClientEmailInputField().type(ClientEmail);
        clientPage.getSaveButton().should('be.visible');
        clientPage.getSaveButton().click({force:true});
        
    })
})