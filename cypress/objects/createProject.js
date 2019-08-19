class CreateProject {

    getNameField() {
        return cy.get(`[id="projectDetailsForm.name"]`);
    }

    openClientDropDown() {
        return cy.get('[for="projectDetailsForm.client"]').next();
    }

    openManagerDropDown() {
        return cy.get('[for="projectDetailsForm.projectManager"]').next();
    }

    getCheckBox(id) {
        return cy.get(`[id="item_NaN_${id}"]`).next();
    }

    getAddButton(name) {
        return cy.get('[class="btn btn__secondary"]').contains(name);
    }
}
export default CreateProject;