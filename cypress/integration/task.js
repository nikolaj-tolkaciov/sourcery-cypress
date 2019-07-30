import LoginPage from '../objects/loginPage';   
import TaskPage from '../objects/taskPage';

describe('Sourcebooks login', function() {
    it('Admins can create new task', function () {
        const loginPage = new LoginPage;
        loginPage.visit();
        loginPage.getUserID().click({force:true});
        loginPage.getUserOption("Berta Rėja Butvilaitė").click();
        loginPage.getRole().click({force:true});
        loginPage.getRoleOption("Admin").click();
        loginPage.getSubmitButton().click();
        const taskPage = new TaskPage;
        taskPage.getTasks().click();
        taskPage.getCreateTaskButton().click();
        var autoName = 'Auto name_' + Math.random().toString(36).substr(2, 9);
        taskPage.getFormName().type(autoName);
        taskPage.getFieldTextArea().type('auto description');
        taskPage.getBillToClientInputField().click();
        taskPage.getBillToClientLabel("Yes").click();
        taskPage.getFormRate().clear();
        taskPage.getFormRate().type(1.234);
        taskPage.getSubmitButton().click();
        taskPage.getUrl().should('not.include', 'create');
        taskPage.getTasks().click();
        taskPage.getTaskNameInputField().eq(0).type(autoName);
        taskPage.getFilteredTaskName(autoName).should('be.visible');
    })
})