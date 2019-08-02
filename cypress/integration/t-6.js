import TimeLoggingPage from '../objects/timeLoggingPage';

const timeLoggingPage = new TimeLoggingPage();

describe('Log time', function() {

    beforeEach(function(){
        cy.loginAs("Admin")
    })

    it('Should be able to log time with role admin', function () {

        timeLoggingPage.visit();
        var description = timeLoggingPage.logTimeEntry();
        timeLoggingPage.assertTimeEntrySaved(description);
    })
})