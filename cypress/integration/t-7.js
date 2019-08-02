import TimeEntriesPage from '../objects/timeEntriesPage';

const timeEntriesPage = new TimeEntriesPage();

describe('Check time entry', function() {

    beforeEach(function(){
        cy.loginAs("Admin")
    })

    it('Should be able to check time entry with role admin', function () {
        timeEntriesPage.visit();
        timeEntriesPage.filterTimeEntries();
        timeEntriesPage.assertFilteredDataIsCorrect();
    })
})