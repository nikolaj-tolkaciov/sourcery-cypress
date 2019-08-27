class LunchPageSettings
{
    SettingsPage()
    {
        cy.get('.v-list__tile__title').contains("Nustatymai").click();
    }

    LanguageToEnglish()
    {
        cy.get('.v-select__slot').contains("Pageidautina kalba").click({force:true});
        cy.get('.v-list__tile__title').contains("English").click({force:true});
    }

    LanguageChangeCheck()
    {
        cy.get('.headline').should('contain',"Settings");
    }
}

export default LunchPageSettings