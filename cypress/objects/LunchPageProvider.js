class LunchPageProvider
{
    PatiekaluRedagavimas()
    {
        cy.get('.v-list__tile__title').contains("Patiekalų Redagavimas").click();
        cy.wait(1000);
    }

    ProviderCreationPage()
    {
        cy.get('.v-btn__content').contains("build").click({force:true});
        cy.get('.v-btn__content').contains("add").click({force:true});   
    }

    CreateProvider(providername,providercolor,food1cost,food1number,food1name,food1nametranslate,food2cost,food2number,food2name,food2nametranslate)
    {
        cy.get('[name="Tiekėjo Pavadinimas"]').type(providername);
        //cy.get('.v-list__tile__mask').contains(providername).click({force:true});
        cy.get('[name="Tiekėjo spalva"').type(providercolor);
        cy.get('.v-list__tile__mask').contains(providercolor).click({force:true});
        cy.get('[aria-label="Kaina"]').eq(0).type(food1cost);
        cy.get('[aria-label="Kiekis"]').eq(0).type(food1number);
        cy.get('[aria-label="Patiekalo pavadinimas"]').eq(0).type(food1name);
        cy.get('[aria-label="Vertimas"]').eq(0).type(food1nametranslate);

        cy.get('.v-list__tile__title').contains("Pagrindiniai Patiekalai").click();
        cy.get('[aria-label="Kaina"]').eq(1).type(food2cost);
        cy.get('[aria-label="Kiekis"]').eq(1).type(food2number);
        cy.get('[aria-label="Patiekalo pavadinimas"]').eq(1).type(food2name);
        cy.get('[aria-label="Vertimas"]').eq(1).type(food2nametranslate);
    }

    Save()
    {
        cy.get('.v-btn__content').contains("Išsaugoti").click()
        cy.wait(1000);
    }

}

export default LunchPageProvider