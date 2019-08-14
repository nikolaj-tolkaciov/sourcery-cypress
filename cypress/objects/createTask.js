function generate_random_string(string_length){
    let random_string = '';
    let random_ascii;
    for(let i = 0; i < string_length; i++) {
        random_ascii = Math.floor((Math.random() * 25) + 97);
        random_string += String.fromCharCode(random_ascii)
    }
    return random_string
}
var random_string_1 = generate_random_string(8)
var random_string_2 = generate_random_string(8)
 //let taskName = Math.random().toString(36).substring(2, 15)
class CreateTask {

    getTasks () {
        return cy.contains('Tasks');
    }
    createTask () {
        return cy.contains('Create Task');
    }
    getDetailsForm () {
        return cy.get(`[id="taskDetailsForm.name"]`)
    }
    typeTaskName () {
        return cy.get(`[id="taskDetailsForm.name"]`).type(random_string_1);
    }
    getDescriptionForm () {
        return cy.get(`[id="taskDetailsForm.description"]`)
    }
    typeDescription () {
        return cy.get(`[id="taskDetailsForm.description"]`).type(random_string_2);
    }
    setBill_to_Client() {
        return cy.get(`[aria-selected="true"]`)
    }
    selectBill_to_Client() {
        return cy.get(`[aria-label="Yes"]`)
    }
    typeRate () {
        return cy.get(`[id="taskDetailsForm.rate"]`).clear().type(Math.floor(Math.random()*10))
    }
    search_for_Tasks () {
        return cy.get(`[class="field__text field__text--small"]`).first().click().type(random_string_1);
    }
    check_TaskName_Exist(){
        return cy.contains(random_string_1).should('be.visible');
    }  
}
export default CreateTask