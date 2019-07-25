import LoginPage from '../Objects/loginPage'
import TimeLoginPage from '../Objects/ObjectTimeLogin/timeLoginPage'

const loginPage = new LoginPage()
const timeLoginPage = new TimeLoginPage()
const testUser = 'Algirdas Viltrakis'

const rolesArray = [
    {'role' : 'User', 'tabCount' : 1}, 
    {'role' : 'Team Lead', 'tabCount' : 2},
    {'role' : 'Manager', 'tabCount' : 5}, 
    {'role' : 'Accountant', 'tabCount' : 5}, 
    {'role' : 'Admin', 'tabCount' : 6}
]

describe('Sourcebooks login', function() {

    it('Should display validation for empty user after attempted loggin', function () {

        loginPage.visit()
        loginPage.getValidationError().should('not.visible')
        loginPage.submitLogin().click()
        loginPage.getValidationError().should('be.visible')
    })
for (let role of rolesArray) {
    it('Should be able to login with role User', function () {

        loginPage.visit()
        loginPage.getUser().click({force:true})
        loginPage.getUserName(testUser).click()
        loginPage.getRole().click({force:true})
        loginPage.getRoleLogin(role['role']).click()
        loginPage.submitLogin().click()
        
        timeLoginPage.check('.time-logging')
        timeLoginPage.title().contains('Timesheets')
        timeLoginPage.calendar().should('be.visible')
        timeLoginPage.today().contains(new Date().getDate())
        timeLoginPage.titleForm().should('be.visible')
        timeLoginPage.userName().contains(testUser)
        timeLoginPage.tabNumber().should('have.length', role['tabCount'])
        timeLoginPage.titleColour().should('have.css', 'color', 'rgb(64, 76, 237)')
    })
}
})
