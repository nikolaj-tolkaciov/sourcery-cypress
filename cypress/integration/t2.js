import LoginPage from '../objects/loginPage';

const loginPage = new LoginPage();

it('Should verify all user roles can log in and should see appropriate tabs - USER', function () {
    
    loginPage.visit();
    loginPage.getUserDropDown().click({force:true});
    loginPage.getSpecificUserFromDropDown("Ieva Stonkaitė").click();
    loginPage.getRoleDropDown().click({force:true});
    loginPage.getSpecificRoleFromDropDown("User").click();
    loginPage.getSubmitButton().click();
    loginPage.getUserTitle().contains('Ieva Stonkaite');
    loginPage.getElementCountOfNavigationBar(1);
    loginPage.getElementColor().should('have.css', 'color', 'rgb(64, 76, 237)');      
})

it('Should verify all user roles can log in and should see appropriate tabs - TEAM LEAD', function () {

    loginPage.visit();
    loginPage.getUserDropDown().click({force:true});
    loginPage.getSpecificUserFromDropDown("Ieva Stonkaitė").click();
    loginPage.getRoleDropDown().click({force:true});
    loginPage.getSpecificRoleFromDropDown("Team Lead").click();
    loginPage.getSubmitButton().click();
    loginPage.getUserTitle().contains('Ieva Stonkaite');
    loginPage.getElementCountOfNavigationBar(2);
    loginPage.getElementColor().should('have.css', 'color', 'rgb(64, 76, 237)');          
})

it('Should verify all user roles can log in and should see appropriate tabs - MANAGER', function () {

    loginPage.visit();
    loginPage.getUserDropDown().click({force:true});
    loginPage.getSpecificUserFromDropDown("Ieva Stonkaitė").click();
    loginPage.getRoleDropDown().click({force:true});
    loginPage.getSpecificRoleFromDropDown("Manager").click();
    loginPage.getSubmitButton().click();
    loginPage.getUserTitle().contains('Ieva Stonkaite');
    loginPage.getElementCountOfNavigationBar(5);
    loginPage.getElementColor().should('have.css', 'color', 'rgb(64, 76, 237)');    
})

it('Should verify all user roles can log in and should see appropriate tabs - ACCOUNTANT', function () {

    loginPage.visit();
    loginPage.getUserDropDown().click({force:true});
    loginPage.getSpecificUserFromDropDown("Ieva Stonkaitė").click();
    loginPage.getRoleDropDown().click({force:true});
    loginPage.getSpecificRoleFromDropDown("Accountant").click();
    loginPage.getSubmitButton().click();
    loginPage.getUserTitle().contains('Ieva Stonkaite');
    loginPage.getElementCountOfNavigationBar(5);
    loginPage.getElementColor().should('have.css', 'color', 'rgb(64, 76, 237)');       
})

it('Should verify all user roles can log in and should see appropriate tabs - ADMIN', function () {

    loginPage.visit();
    loginPage.getUserDropDown().click({force:true});
    loginPage.getSpecificUserFromDropDown("Ieva Stonkaitė").click();
    loginPage.getRoleDropDown().click({force:true});
    loginPage.getSpecificRoleFromDropDown("Admin").click();
    loginPage.getSubmitButton().click();
    loginPage.getUserTitle().contains('Ieva Stonkaite');
    loginPage.getElementCountOfNavigationBar(6);
    loginPage.getElementColor().should('have.css', 'color', 'rgb(64, 76, 237)');       
})