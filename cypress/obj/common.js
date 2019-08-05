class Common {
    makeId() {
        let timeStamp = new Date().getTime();
        return `Random_Name_${timeStamp}`;
    }
    
    getPageTitle() {
        return cy.get('.page__title');
    }

    getUserNameTitle() {
        return cy.get('.user-info__title');
    }

    getNavTabs() {
        return cy.get('.main-nav').find('li');
    }

    getActiveTab() {
        return cy.get('.main-nav__link--active');
    }
}

export default Common;