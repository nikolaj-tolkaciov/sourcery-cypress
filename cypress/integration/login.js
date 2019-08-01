describe('Sourcebooks login', function() {

    it('Should display validation for empty user after attempted loggin', function () {
        
        cy.visit('/');
        cy.get('.Select.not-valid').should('not.visible')
        cy.get('[type="submit"]').click();
        cy.get('.Select.not-valid').should('be.visible')
    })
 
    const Roles =
    [
        {
            name: "User",
            tabs: '1'
        },
        {
            name: "Team Lead",
            tabs: '2'
        },
        {
            name: "Manager",
            tabs: '5'
        },
        {
            name: "Accountant",
            tabs: '5'
        },
        {
            name: "Admin",
            tabs: '6'
        }
    ];
       
    
    Roles.forEach((role) => {
        it(`Verify ${role.name} role can log in and should see appropriate tabs`, function() {
            cy.visit('/');
            cy.get('[id="loginForm.userId"]').click({force:true});
            cy.get('[aria-label="Dainius Gaidamavičius"]').click();
            cy.get('[id="loginForm.role"]').click({force:true});
            cy.get(`[aria-label='${role.name}']`).click();
            cy.get('[type="submit"]').click();
            cy.get('.user-info__title').contains('Dainius Gaidamavicius'); 
            cy.get('.main-nav').find('li').should('have.length', role.tabs);                      
            cy.get('.main-nav__link--active').should('have.css','color', 'rgb(64, 76, 237)');
        })
    })  

   /* it('T-3: Admin creates new task', function () {
        cy.visit('/tasks');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Dainius Gaidamavičius"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="Admin"]').click()
        cy.get('[type="submit"]').click();
        cy.get('[type="button"]').click();
        cy.get('[id = "taskDetailsForm.name"]').type('TASK1');
        cy.get('[id = "taskDetailsForm.description"]').type('TASK11');
        cy.get('[id = "react-select-8--value-item]').select('Yes')
    }) */





})