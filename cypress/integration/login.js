import LoginPage from '../objects/loginPage'
const loginPage = new LoginPage()

describe('Sourcebooks login', function() {

    it('Admin creates a new task', function () {
        loginPage.visit()
        loginPage.getLoginForm().click({force:true});
        loginPage.getUser().click();
        loginPage.getLoginRole().click({force:true});
        loginPage.getUserRole().click();
        loginPage.getSubmit().click();
        loginPage.getTasks().click();
        loginPage.getCreateTasks().click();
        loginPage.getDetailsForm().click({force:true});
        loginPage.getTypeTaskName();
        loginPage.getDescriptionForm().click({force:true});
        loginPage.getTypeDescription();
        loginPage.getBill().click({force:true});
        loginPage.getBillable().click();
        loginPage.getTypeRate();
        loginPage.getSubmit().click();
        loginPage.getTasks().click();
        loginPage.getSearch();
        loginPage.getValidate("Testavimas").contains('Tesatvimas');
    })
})