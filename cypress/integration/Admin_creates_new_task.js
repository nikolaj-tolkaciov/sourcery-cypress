import LoginPage from '../objects/loginPage';
import CreateTask from '../objects/createTask';

const loginPage = new LoginPage();
const createTask = new CreateTask();

describe('Sourcebooks login', function() {

    beforeEach(function () {
        cy.loginAs("Admin")
        cy.visit('/')
    })

    it('Should create new Task', function () {
        createTask.getClickOnTaskBar().click();
        createTask.getClickCreatTaskButton().click();
        
        var task = 'task ' + Date.now();
        var description = 'Automatinis aprasymas ' + Date.now();

        createTask.getFillTaskName().type(task);
        createTask.getFillTaskDescription().type(description);
        createTask.getSelectDropDownButton().click({force:true});
        createTask.getClickYes().click({force:true});
        createTask.getClearField().clear();
        createTask.getFillDetailsForm().type('1.0');
        createTask.getClickSaveButton().click({force:true});

        cy.url().should('to.not.equal',('/tasks/create'));
        createTask.getClickOnTaskBar().click();
        createTask.getFilterCreatedTask().first().type(task);
        createTask.getColumnNameEqualTask().should('be',(task));
        createTask.getColumnDescribtion().should('be',(description));
     })

})
