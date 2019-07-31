class TimeLoggingPage {

    urlIncludesCheck(textIncludes) {
        return cy.url().should('include', `${textIncludes}`);
    }

    getPageTitle() {
        return cy.get('.page__title');
    }

    getCalendar() {
        return cy.get('.calendar');
    }

    getLogHoursForm() {
        return cy.get('.tile.form');
    }

    getUserNameTitle() {
        return cy.get('.user-info__title');
    }

    checkNavigationPanelItemNumber() {
        return cy.get('.main-nav').find('li');
    }

    getCalendarDate() {
        return cy.get('.calendar__date');
    }

    checkSelectedNavPanelItemIsBlue() {
        return cy.get('.main-nav__link--active');
    }

    getLogOutButton() {
        
        return cy.get('[id="logout-button"]');
    }

    getNavigationPanelTasks() {
        return cy.get('.main-nav__link' + '[href="/tasks"]');
    }

    getNavigationPanelClients() {
        return cy.get('.main-nav__link' + '[href="/clients"]');
    }

    getNavigationPanelProjects() {
        return cy.get('.main-nav__link' + '[href="/projects"]');
    }

    getNavigationPanelTimeLogging() {
        return cy.get('.main-nav__link' + '[href="/time-logging"]');
    }

    getProjectInputfieldDropdown() {
        return cy.get('[id="react-select-2--value"]');
    }

    getProjectInputfield() {
        return cy.get('.Select-input' + '[aria-expanded="true"]');
    }

    getTaskInputfieldDropdown() {
        return cy.get('[id="react-select-3--value"]');
    }
    getTaskInputfield() {
        return cy.get('.Select-input' + '[aria-expanded="true"]');
    }

    getDescriptionInputfield() {
        return cy.get('[id="timeLoggingForm.notes"]');
    }

    getHoursInputfield() {
        return cy.get('[id="timeLoggingForm.hours"]');
    }

    getLogHoursButton() {
        return cy.get('[type="submit"]').contains("Log Hours");
    }

    /*checkIfNewRecordAppearedWithCorrectData(description, projectName) {

        cy.get('[col-id="notes"]').within(() => {
             cy.get('.time-list__description').contains(description).should('be.visible');
        })  */
        /*checkIFNewRecordWithCorrectData(projectName, taskName, description, spentHours) {
            cy.get('.ag-row-level-0').contains(projectName)
            .and().contains(taskName)
            .and().contains(description)
            .and().contains(spentHours).should('exist');
        }*/
    
        nr1(projectName, taskName, description, spentHours) {
            cy.get(`.//div[@role="row"]/div[contains(text(), ${projectName}]`/*/following-sibling::div[contains(text(), ${taskName}]/following-sibling::div[contains(text(), ${description}]/following-sibling::div[contains(text(), ${spentHours}]`).should('exist'*/);
        }

    /*checkgg(projectName, taskName, description, spentHours) {
        cy.get('[role="row"]').within(() => {
            
            cy.get('[col-id="projectName"]').within(() => {
                cy.get('.time-list__description').contains(projectName).should('exist').should('contain', projectName);
            })
            
            cy.get('[col-id="taskName"]').contains(taskName).should('exist').should('contain', taskName)
            
            cy.get('[col-id="notes"]').within(() => {
                cy.get('.time-list__description').contains(description).should('exist').should('contain', description);
            })
            
            cy.get('[col-id="1"]').within(() => {
                cy.get('.time-list__hours').contains(spentHours).should('exist').should('contain', spentHours);
            })
        })

        checkg(projectName, taskName, description, spentHours) {
            cy.get('[role="row"]').should('have.all.keys', projectName, taskName, description, spentHours)
        }

        /*check(projectName, taskName, description, spentHours) {
            cy.get('[role="row"]' ).next.should(($lis) => {
                expect($lis.eq(0), 'first item').to.contain(projectName)
                expect($lis.eq(1), 'second item').to.contain(taskName)
                expect($lis.eq(2), 'third item').to.contain(description)
                expect($lis.eq(3), 'fourth item').to.contain(spentHours)
              })
            }*/
        
}

export default TimeLoggingPage;