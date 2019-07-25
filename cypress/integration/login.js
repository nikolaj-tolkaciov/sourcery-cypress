import LoginPage from '../objects/loginPage'


var Namer = "Dmitrij Kovner";

describe('Sourcebooks login', function() {

    it('Should display validation for empty user after attempted loggin', function () {
        const loginPage = new LoginPage()

        loginPage.visit()

        loginPage.getValidationError().should('not.visible')
        cy.get('[type="submit"]').click();
        loginPage.getValidationError().should('be.visible')
    })

    //T-2
    var Roles = ["User", "Team Lead", "Manager", "Accountant", "Admin"];
    for(let i = 0; i < Roles.length; i++)
    {
        it(`Should be able to login with role ${Roles[i]}`, function () {
            var RoleTabNumber = [1, 2, 5, 5, 6];
            const loginPage = new LoginPage()
            loginPage.visit();

            cy.get('[id="loginForm.userId"]').click({force:true});
            cy.get(`[aria-label="${Namer}"]`).click();
            cy.get('[id="loginForm.role"]').click({force:true});
            cy.get(`[aria-label="${Roles[i]}"]`).click();
            cy.get('[type="submit"]').click();

            cy.get('.user-info__title').contains(Namer);

            cy.get('.main-nav').find('li').should('have.length', RoleTabNumber[i]);
            cy.get('.main-nav__link--active').should('have.css', 'color', 'rgb(64, 76, 237)');
            
        })
    }


})