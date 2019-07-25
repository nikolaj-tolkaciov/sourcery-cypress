class Timelog{

includer(){
cy.url().should('include', '/time-logging');
}
pagetitle(){
return cy.get('.page__title')
}
calendarv(){
return cy.get('.calendar')
}
getTile(){
    return cy.get('.tile.form');
}
getUserTitle(){
    return cy.get('.user-info__title');
}
mainNav(){
    return cy.get('.main-nav').find('li');
}
celendarToday(){
    return cy.get('.calendar--today');
}
selectedTimelogging(){
    return cy.get('.main-nav__link--active');
}
}
export default Timelog