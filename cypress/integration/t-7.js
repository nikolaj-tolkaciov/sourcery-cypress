import TimeLoggingPage from '../objects/timeLoggingPage';
import TimeEntriesPage from '../objects/timeEntriesPage';

const timeLoggingPage = new TimeLoggingPage();
const timeEntriesPage = new TimeEntriesPage();

describe('Check time entry', function() {

    beforeEach(function(){
        cy.loginAs("Admin")
    })

    it('Should be able to check time entry with role admin', function () {
        timeLoggingPage.visit();
        var description = timeLoggingPage.logTimeEntry();
        cy.wait(1000);
        
        timeEntriesPage.visit();
        timeEntriesPage.filterTimeEntries();
        timeEntriesPage.assertNewEntryFound(description);
    })
})