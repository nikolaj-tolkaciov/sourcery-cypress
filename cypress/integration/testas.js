import LunchLogin from '../objects/LunchPageLogin'
import LunchProvider from '../objects/LunchPageProvider'
import LunchSettings from '../objects/LunchPageSettings'
describe('Lunch Page testing', function() {
  /*  
    it('Admin creates new provider', function () {
        
        const Lunchlogin = new LunchLogin();
        const Lunchprovider = new LunchProvider();
        let Email = "admin@blue.vln";
        let Password = "Ocean000";
        let ProviderName = "TiekejasBlueTest"
        let ProviderColor = "Red"
        let Food1Cost = "1"
        let Food1Number = "999"
        let Food1Name = "Food1Name"
        let Food1NameTranslate = "Food1NameTranslate"
        let Food2Cost = "2"
        let Food2Number = "999"
        let Food2Name = "Food2Name"
        let Food2NameTranslate = "Food2NameTranslate"
        Lunchlogin.visit();
        Lunchlogin.InputEmail(Email);
        Lunchlogin.InputPassword(Password);
        Lunchlogin.Login();

        Lunchprovider.PatiekaluRedagavimas();
        cy.get('[aria-label="Pasirinkta Data"]').click();
        cy.get('.v-btn__content').contains("30").click({force:true});
        Lunchprovider.ProviderCreationPage();
        Lunchprovider.CreateProvider(ProviderName,ProviderColor,Food1Cost,Food1Number,Food1Name,Food1NameTranslate,Food2Cost,Food2Number,Food2Name,Food2NameTranslate)
        Lunchprovider.Save();
        cy.get('.v-list__tile__content').get('.v-list__tile--avatar').get('.red--text').should('contain',ProviderName);
    })
*/
    it('User can Order/Skip Lunch', function () {
        
        const Lunchlogin = new LunchLogin();
        let Email = "dmitri@blue.vln";
        let Password = "Ocean123";
        let ProviderName = "TiekejasBlueTest"
        Lunchlogin.visit();
        Lunchlogin.InputEmail(Email);
        Lunchlogin.InputPassword(Password);
        Lunchlogin.Login();
        cy.wait(5000);
        cy.get('.v-list__tile__title').within(() => {
            cy.contains("Pirmadienis");
        }).click({force:true});
        cy.wait(1000);
        cy.get('.v-list__tile__title').within(() => {
            cy.contains("Antradienis");
        }).click({force:true});
        cy.wait(1000);   
        cy.get('.v-list__tile__title').within(() => {
            cy.contains("Trečiadienis");
        }).click({force:true});
        cy.wait(1000);
        cy.get('.v-list__tile__title').within(() => {
            cy.contains("Penktadienis");
        }).click({force:true});
        cy.wait(1000);
        cy.get('.v-list__tile__title').within(() => {
            cy.contains(ProviderName);
        }).click({force:true});
        cy.wait(1000);
        cy.get('.v-card__text').first().click();
        cy.get('.orders-list-button').click();
    })
/*
       it('User can change interface language to English', function () {
        
        const Lunchlogin = new LunchLogin();
        const Lunchsettings = new LunchSettings();
        let Email = "dmitri@blue.vln";
        let Password = "Ocean123";
        Lunchlogin.visit();
        Lunchlogin.InputEmail(Email);
        Lunchlogin.InputPassword(Password);
        Lunchlogin.Login();

        Lunchsettings.SettingsPage();
        Lunchsettings.LanguageToEnglish();
        Lunchsettings.LanguageChangeCheck();
    })

    it('User can change day options', function () {
        
        const Lunchlogin = new LunchLogin();
        const Lunchprovider = new LunchProvider();
        let Email = "admin@blue.vln";
        let Password = "Ocean000";
        Lunchlogin.visit();
        Lunchlogin.InputEmail(Email);
        Lunchlogin.InputPassword(Password);
        Lunchlogin.Login();

        //Lunchprovider.PatiekaluRedagavimas();
        cy.get('.v-list').within(() => 
        {
            cy.contains("Nemokami pietūs").get('.v-input--selection-controls__input').get('.v-input--selection-controls__ripple').get('[role="checkbox"]').get('[type="checkbox"]').get('[aria-checked="false"]');
        }).click({multiple:true,force:true});
        cy.get('.v-list').within(() => 
        {
            cy.contains("Nemokami pietūs").get('.v-input--selection-controls__input').get('.v-input--selection-controls__ripple').get('[role="checkbox"]').get('[type="checkbox"]').should('be', true);
        });
    }) 
*/
})