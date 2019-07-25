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
        tasks.getButton().click();
        var autoName = 'Auto name_' + Math.random().toString(36).substr(2, 9);
        tasks.getFormName().type(autoName);
        tasks.getFieldTextArea().type('auto description');
        tasks.getValue().click();
        tasks.getValueLabel("Yes").click();
        tasks.getFormRate().click();
        tasks.getFormRate().clear();
        tasks.getFormRate().type(1.234);
        tasks.getSubmitButton().click();
        tasks.getUrl().should('not.include', 'create');
        tasks.getTasks().click();
        tasks.getSmallFieldText().first().type(autoName);
        tasks.getTitleName(autoName).contains(autoName);
    })
})