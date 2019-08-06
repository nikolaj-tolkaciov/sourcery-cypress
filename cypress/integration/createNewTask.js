import NewTaskPage from "../objects/newTaskPage";

const newTaskPage = new NewTaskPage();

describe('Sourcebooks login', function() {

    beforeEach(function() {

        cy.loginAs('Admin');
    })

    it('Admin should create a new task', function () {

        const taskName = 'task' + Date.now();
        const taskDescription = 'Writing automation test.';

        newTaskPage.visit();
        newTaskPage.getButton().click();
        newTaskPage.getTaskDetailsFormElement("name").type(taskName);
        newTaskPage.getTaskDetailsFormElement("description").type(taskDescription);
        newTaskPage.getAriaSelectedTrue().click({force:true}).get('[aria-label="Yes"]').click({force:true});
        newTaskPage.getTaskDetailsFormElement("rate").clear().type("5.000");
        newTaskPage.getSubmitButton().click({force:true});

        newTaskPage.wait();                                              
        newTaskPage.getUrl().should('to.not.equal',('/tasks/create'));
        
        newTaskPage.visit();
        newTaskPage.getFieldText().first().click().type(taskName);
        newTaskPage.getTitle(taskName).should('exist');
        newTaskPage.getTitle(taskDescription).should('exist');
    })
})