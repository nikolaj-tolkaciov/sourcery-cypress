import ProjectPage from '../pages/ProjectPage'
import { current_user as curr_user, getRandomName } from '../helpers/constants'

describe('Project creation', () => {

    it('admin should be able to add new project', () => {
        cy.loginAs('Admin')
        ProjectPage.visit()

        ProjectPage.getCreateButton().click()

        ProjectPage.getNameField().type(getRandomName())

        ProjectPage.getClientDropDown().click({ force: true })
        ProjectPage.getClientOption('Internal').click()

        ProjectPage.getProjectManagerDropDown().click({ force: true })
        ProjectPage.getProjectManagerOption(curr_user.firstName, curr_user.lastName).click()
        
        ProjectPage.getAddTasksButton().click()
        ProjectPage.getFirstTask().click()
        ProjectPage.getAddTaskModalButton().click()

        ProjectPage.getAddMembersButton().click()
        ProjectPage.getMember(curr_user.firstName, curr_user.lastName).click({force: true})
        ProjectPage.getAddMemberModalButton().click()

        ProjectPage.getSubmitButton().click()

        ProjectPage.should('contain', 'Project Saved.')
        cy.url().should('not.contain', '/create')
        
    })

})