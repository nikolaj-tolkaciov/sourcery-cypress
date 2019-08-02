class LoginPage 
{
    visit()
    {
        cy.visit('/');
    }
    getUserValidationIndicator()
    {
        return cy.get('.Select.not-valid');
    }

    getSubmitButton()
    {
        return cy.get('[type="submit"]');
    }

    getSpecificUserFromDropDown(userName)
    {
        return cy.get('[aria-label="' + userName + '"]');
    }

    getUserDropDown()
    {
        return cy.get('[id="loginForm.userId"]');
    }

    getpRoleDropDown()
    {
        return cy.get('[id="loginForm.role"]');
    }

    getSpecificRoleFromDropDown(role)
    {
        return cy.get('[aria-label="' + role + '"]');
    }

    checkIfWeAreInSpecificURL(url)
    {
        return cy.url().should('include', url);
    }

    getPageTitle()
    {
        return cy.get('.page__title');
    }
    
    getCalendar()
    {
        return cy.get('.calendar');
    }

    getTileForm()
    {
        return cy.get('.tile.form');
    }

    checkLoginName(nameSurname)
    {
        return cy.get('.user-info__title').contains(nameSurname);
    }

    checkNavigationMenuLength(count)
    {
        return cy.get('.main-nav').find('li').should('have.length', count);
    }

    checkIfTodaysDateIsCorrect()
    {  
        var d = new Date();
        cy.get('.calendar--today').find('span').get(".calendar__date").contains(d.getDate());
    }

    loginAsSpecificUserAndRole(name, role)
    {
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="' + name + '"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="' + role + '"]').click();
        cy.get('[type="submit"]').click();
    }

    checkSelectedButtonColor()
    {
        return cy.get('.main-nav__link--active').should('have.css', 'color', 'rgb(64, 76, 237)');
    }
}

export default LoginPage