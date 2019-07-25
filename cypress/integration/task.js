import LoginPage from '../objects/loginPage';   
import Tasks from '../objects/taskPage';

describe('Sourcebooks login', function() {
    it('Admins can create new task', function () {
        const loginPage = new LoginPage;
        loginPage.visit();
        loginPage.getUserID().click({force:true});
        loginPage.getUserOption("Berta Rėja Butvilaitė").click();
        loginPage.getRole().click({force:true});
        loginPage.getRoleOption("Admin").click();
        loginPage.getSubmitButton().click();
        const tasks = new Tasks;
        tasks.getTasks().click();
        tasks.getCreateTaskButton().click();
        var autoName = 'Auto name_' + Math.random().toString(36).substr(2, 9);
        tasks.getFormName().type(autoName);
        tasks.getFieldTextArea().type('auto description');
        tasks.getBillToClient().click();
        tasks.getBillToClientLabel("Yes").click();
        tasks.getFormRate().clear();
        tasks.getFormRate().type(1.234);
        tasks.getSubmitButton().click();
        tasks.getUrl().should('not.include', 'create');
        tasks.getTasks().click();
        tasks.getSmallFieldText().eq(0).type(autoName);
        tasks.getTitleName(autoName).should('be.visible');
    })
})