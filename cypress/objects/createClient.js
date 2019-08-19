class CreateClient {

    getField(fieldName) {
        return cy.get(`[id="clientDetailsForm.${fieldName}"]`)
    }
}
export default CreateClient