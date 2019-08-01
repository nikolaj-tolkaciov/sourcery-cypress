describe('Sourcebooks login', function() {

    it('Should display validation for empty user after attempted loggin', function () {
        
        cy.visit('/');
        cy.get('.Select.not-valid').should('not.visible')
        cy.get('[type="submit"]').click();
        cy.get('.Select.not-valid').should('be.visible')
    })

    var roles = [
        { name: 'User', 'tabCount': 1 }, 
        { name: 'Team Lead', tabCount: 2 }, 
        { name: 'Manager', tabCount: 5 }, 
        { name: 'Accountant', tabCount: 5}, 
        { name: 'Admin', tabCount: 6 }
    ];

    function makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    it('Should be able to create new task as Admin', function () {
        cy.visit('/');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Marius Lastauskas"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="Admin"]').click();
        cy.get('[type="submit"]').click();

        let taskName = makeid(20);

        cy.visit('/tasks');
        cy.get('button').contains('Create Task').click();
        cy.get('[id="taskDetailsForm.name"]').type(taskName);
        cy.get('[id="taskDetailsForm.description"]').type('Automated test created task');
        cy.get('label').contains('Bill to Client').next().click();
        cy.get('[aria-label="Yes"]').click();
        cy.get('[id="taskDetailsForm.rate"]').clear();
        cy.get('[id="taskDetailsForm.rate"]').type(Math.random() * 10);
        cy.get('button').contains('Save').click();

        cy.url().should('match', new RegExp('[^\s]*tasks\\\/[0-9]+'));
        cy.visit('/tasks');
        cy.get('[class="field--filter"]').first().find('input').type(taskName);
        cy.wait(3000);
        cy.get('[class="ag-body-viewport-wrapper"').find('.ag-body-viewport').should('have.length', 1);
    })

    for (let i = 0; i < roles.length; i++) {
        it('Should display ' + roles[i].tabCount + ' tabs when logged in as ' + roles[i].name + '.', function () {
            cy.visit('/');
            cy.get('[id="loginForm.userId"]').click({force:true});
            cy.get('[aria-label="Marius Lastauskas"]').click();
            cy.get('[id="loginForm.role"]').click({force:true});
            cy.get('[aria-label="' + roles[i].name + '"]').click();
            cy.get('[type="submit"]').click();

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