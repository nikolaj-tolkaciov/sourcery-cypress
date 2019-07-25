class Timelog{

includer(){
cy.url().should('include', '/time-logging');
}
pagetitle(){
return cy.get('.page__title')
}

}

export default Timelog