class LoginPage {
    visit() {
        cy.visit('/')
    }

/*function makeid(l)
{
var text = "";
var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for(var i=0; i < l; i++ )
{  
text += char_list.charAt(Math.floor(Math.random() * char_list.length));
}
return text;
}
    getValidationError () {
        return cy.get('.Select.not-valid')
    }
    
    getUserOption (userName) {
        return cy.get(`[aria-label="${userName}"]`)
    }
    */
   getSubmit () {
    return cy.get('[type="submit"]')
    }
    getLoginForm () {
        return cy.get(`[id="loginForm.userId"]`)
    }
    getUser () {
        return cy.get(`[aria-label="Benediktas Gilis"]`)
    }
    getLoginRole () {
        return cy.get(`[id="loginForm.role"]`)
    }
    getUserRole () {
        return cy.get(`[aria-label="Admin"]`)
    }
    getTasks () {
        return cy.contains('Tasks');
    }
    getCreateTasks () {
        return cy.contains('Create Task');
    }
    getDetailsForm () {
        return cy.get(`[id="taskDetailsForm.name"]`)
    }
    getTypeTaskName () {
        return cy.get(`[id="taskDetailsForm.name"]`).type('Testavimas')
    }
    getTypeDescription () {
        return cy.get(`[id="taskDetailsForm.description"]`).type('labas')
    }
    getDescriptionForm () {
        return cy.get(`[id="taskDetailsForm.description"]`)
    }
    getBill () {
        return cy.get(`[aria-selected="true"]`)
    }
    getBillable () {
        return cy.get(`[aria-label="Yes"]`)
    }
    getTypeRate () {
        return cy.get(`[id="taskDetailsForm.rate"]`).clear().type(Math.floor(Math.random()*10))
    }
    getSearch () {
        return cy.get(`[class="field__text field__text--small"]`).first().click().type('Testavimas')
    }
    getValidate (Testavimas) {
        return cy.get(`[title="${Testavimas}"]`)
    }

    
} 

export default LoginPage