import Common from "../objects/common";
import ProjectPage from "../objects/projectPage";

const common = new Common();
const projectPage = new ProjectPage();

describe('New project creation by Admin', function() {

    beforeEach(function () {
        cy.loginAs('Admin');
        projectPage.visit();
    })

    const uniqueString = common.getCurrentTimeStamp();

    it('Admin creates new project', function () {
        common.clickCertainButtonWithText('button','Create Project');

        projectPage.inputProjectName(uniqueString);
        projectPage.clickProjectManagerDropDown();
        projectPage.clickSpecificManagerFromDropDown('Poškus, Dominykas');
        projectPage.clickClientDropDown();
        projectPage.clickSpecificClientFromDropDown('Internal');
        common.clickCertainButtonWithText('button', 'Add Task');
        common.selectAFirstCheckBoxFromList();
        projectPage.clickAddSelectedItemsButton();
        common.clickCertainButtonWithText('button', 'Add Members');
        projectPage.typeIntoSearchMembersBox('Poškus, Dominykas');
        projectPage.selectMeFromMembersList();
        projectPage.clickAddSelectedItemsButton();

        common.clickCertainButtonWithText('Submit','Save');
        common.checkIfUrlDoesNotInclude('/projects/create');
    })

    it('Checking if the project was created properly', function () {
        common.filterNamesList(uniqueString);
        common.checkIfListContains(uniqueString);
        common.checkIfListContains('Internal');
    })
})