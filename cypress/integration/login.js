describe('Sourcebooks testLogIn', function() {
    
    var roles = [
        { name: 'User', 'tabCount': 1 }, 
        { name: 'Team Lead', tabCount: 2 }, 
        { name: 'Manager', tabCount: 5 }, 
        { name: 'Accountant', tabCount: 5}, 
        { name: 'Admin', tabCount: 6 }
    ];

    function makeid(length) {
        return 'Random_Name_' + Math.floor(Math.random() * 1000000000000);
    }

    it('Should display validation for empty user after attempted loggin', function () {
        
        cy.visit('/');
        cy.get('.Select.not-valid').should('not.visible')
        cy.get('[type="submit"]').click();
        cy.get('.Select.not-valid').should('be.visible')
    })

    function testLogIn(role) {
        cy.visit('/');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Marius Lastauskas"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="' + role + '"]').click();
        cy.get('[type="submit"]').click();
    }

    it('Should be available for Admin to create new client', function () {
        testLogIn('Admin');

        let organization = makeid(20);
        cy.visit('/clients');
        cy.get('button').contains('Create Client').click();
        cy.get('[id="clientDetailsForm.organization"]').type(organization);
        cy.get('[id="clientDetailsForm.contacts_firstName_0"]').type(makeid(20));
        cy.get('[id="clientDetailsForm.contacts_lastName_0"]').type(makeid(20));
        cy.get('[id="clientDetailsForm.contacts_email_0"]').type(makeid(20) + '@mail.com');
        cy.get('[type="submit"]').click();
        
        cy.visit('/clients');
        cy.get('[class="field--filter"]').first().find('input').type(organization);
        cy.get('[class="ag-body-viewport-wrapper"').find('.ag-body-viewport').should('have.length', 1);
    })

    it('Should be able to create new task as Admin', function () {
        testLogIn('Admin');

        let taskName = makeid(20);

        cy.visit('/tasks');
        cy.get('button').contains('Create Task').click();
        cy.get('[id="taskDetailsForm.name"]').type(taskName);
        cy.get('[id="taskDetailsForm.description"]').type('Automated test created task');
        cy.get('label').contains('Bill to Client').next().click();
        cy.get('[aria-label="Yes"]').click();
        cy.get('[id="taskDetailsForm.rate"]').clear();
        cy.get('[id="taskDetailsForm.rate"]').type(Math.random() * 10);
        cy.get('[type="submit"]').click();

        cy.url().should('match', new RegExp('[^\s]*tasks\\\/[0-9]+'));
        cy.visit('/tasks');
        cy.get('[class="field--filter"]').first().find('input').type(taskName);
        cy.get('[class="ag-body-viewport-wrapper"').find('.ag-body-viewport').should('have.length', 1);
    })

    for (let i = 0; i < roles.length; i++) {
        it('Should display ' + roles[i].tabCount + ' tabs when logged in as ' + roles[i].name + '.', function () {
            testLogIn(roles[i].name);

            cy.url().should('include', '/time-logging');
            cy.get('.page__title').contains('Timesheets')
            cy.get('.calendar').should('be.visible')
            cy.get('.tile.form').should('be.visible')
            cy.get('.user-info__title').contains('Marius Lastauskas');
            cy.get('.main-nav').find('li').should('have.length', roles[i].tabCount);
            
            cy.get('.main-nav__link--active').contains('Time Logging');
            cy.get('.main-nav__link--active').should('have.css', 'color', 'rgb(64, 76, 237)');
        })
    }
    
    it('Should be displaying todays date in Time Logging page', function () {
        const today = new Date();
        const date = today.getDate();

        cy.get('.calendar--today').find('.calendar__date').contains(date);
    })
})