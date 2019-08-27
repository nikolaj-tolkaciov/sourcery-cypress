class LunchPageLogin
{
    visit() 
    {
        cy.visit('https://lunch.devbstaging.com/login-password')
    }

    InputEmail(Email)
    {
        cy.get('[name="email"]').type(Email);
    }

    InputPassword(Password)
    {
        cy.get('[name="password"]').type(Password);
    }
    
    Login()
    {
        cy.get('.v-btn__content').contains("Login").click();
    }

}

export default LunchPageLogin