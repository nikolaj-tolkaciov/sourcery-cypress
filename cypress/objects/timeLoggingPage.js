class TimeLoggingPage {
  getUrl() {
    return cy.url();
  }

  getPageTitle() {
    return cy.get('.page__title');
  }

  getCalendar() {
    return cy.get('.calendar');
  }

  getTileForm() {
    return cy.get('.tile.form');
  }

  getUserName() {
    return cy.get('.user-info__title');
  }

  getNavigationBar() {
    return cy.get('.main-nav');
  }

  getSelectedDateToday() {
    return cy.get('.calendar--today.calendar--selected');
  }

  getActiveTab() {
    return cy.get('.main-nav__link--active');
  }
}

export default TimeLoggingPage;
