import T2Page from '../objects/t2Page';

const t2Page = new T2Page();

it('Should verify all user roles can log in and should see appropriate tabs - USER', function () {
    
    t2Page.visit();
    t2Page.getUserDropDown().click({force:true});
    t2Page.getSpecificUserFromDropDown("Ieva Stonkaitė").click();
    t2Page.getRoleDropDown().click({force:true});
    t2Page.getSpecificRoleFromDropDown("User").click();
    t2Page.getSubmitButton().click();
    t2Page.getUserTitle().contains('Ieva Stonkaite');
    t2Page.getElementCountOfNavigationBar(1);
    t2Page.getSpecificUrl('/time-logging');
    t2Page.getElementColor().should('have.css', 'color', 'rgb(64, 76, 237)');      
})

it('Should verify all user roles can log in and should see appropriate tabs - TEAM LEAD', function () {

    t2Page.visit();
    t2Page.getUserDropDown().click({force:true});
    t2Page.getSpecificUserFromDropDown("Ieva Stonkaitė").click();
    t2Page.getRoleDropDown().click({force:true});
    t2Page.getSpecificRoleFromDropDown("Team Lead").click();
    t2Page.getSubmitButton().click();
    t2Page.getUserTitle().contains('Ieva Stonkaite');
    t2Page.getElementCountOfNavigationBar(2);
    t2Page.getSpecificUrl('/time-logging');
    t2Page.getElementColor().should('have.css', 'color', 'rgb(64, 76, 237)');          
})

it('Should verify all user roles can log in and should see appropriate tabs - MANAGER', function () {

    t2Page.visit();
    t2Page.getUserDropDown().click({force:true});
    t2Page.getSpecificUserFromDropDown("Ieva Stonkaitė").click();
    t2Page.getRoleDropDown().click({force:true});
    t2Page.getSpecificRoleFromDropDown("Manager").click();
    t2Page.getSubmitButton().click();
    t2Page.getUserTitle().contains('Ieva Stonkaite');
    t2Page.getElementCountOfNavigationBar(5);
    t2Page.getSpecificUrl('/time-logging');
    t2Page.getElementColor().should('have.css', 'color', 'rgb(64, 76, 237)');    
})

it('Should verify all user roles can log in and should see appropriate tabs - ACCOUNTANT', function () {

    t2Page.visit();
    t2Page.getUserDropDown().click({force:true});
    t2Page.getSpecificUserFromDropDown("Ieva Stonkaitė").click();
    t2Page.getRoleDropDown().click({force:true});
    t2Page.getSpecificRoleFromDropDown("Accountant").click();
    t2Page.getSubmitButton().click();
    t2Page.getUserTitle().contains('Ieva Stonkaite');
    t2Page.getElementCountOfNavigationBar(5);
    t2Page.getSpecificUrl('/time-logging');
    t2Page.getElementColor().should('have.css', 'color', 'rgb(64, 76, 237)');       
})

it('Should verify all user roles can log in and should see appropriate tabs - ADMIN', function () {

    t2Page.visit();
    t2Page.getUserDropDown().click({force:true});
    t2Page.getSpecificUserFromDropDown("Ieva Stonkaitė").click();
    t2Page.getRoleDropDown().click({force:true});
    t2Page.getSpecificRoleFromDropDown("Admin").click();
    t2Page.getSubmitButton().click();
    t2Page.getUserTitle().contains('Ieva Stonkaite');
    t2Page.getElementCountOfNavigationBar(6);
    t2Page.getSpecificUrl('/time-logging');
    t2Page.getElementColor().should('have.css', 'color', 'rgb(64, 76, 237)');       
})