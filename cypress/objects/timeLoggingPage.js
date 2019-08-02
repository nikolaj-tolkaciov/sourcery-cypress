class TimeLoggingPage {
  visit() {
    cy.visit('/time-logging');
  }

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

  getUserInfoTitle() {
    return cy.get('.user-info__title');
  }

  getMainNav() {
    return cy.get('.main-nav');
  }

  getSelectedDateToday() {
    return cy.get('.calendar--today.calendar--selected');
  }

  getMainNavActiveLink() {
    return cy.get('.main-nav__link--active');
  }
}

export default TimeLoggingPage;
