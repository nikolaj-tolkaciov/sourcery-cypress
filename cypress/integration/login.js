import LoginPage from '../Objects/loginPage'
import TimeLoginPage from '../Objects/ObjectTimeLogin/timeLoginPage'
import TaskPage from '../Objects/TaskPage/TaskPage'

const loginPage = new LoginPage()
const timeLoginPage = new TimeLoginPage()
const taskPage = new TaskPage()
const testUser = 'Algirdas Viltrakis'
const rolesArray = [
    {'role' : 'User', 'tabCount' : 1},
    {'role' : 'Team Lead', 'tabCount' : 2},
    {'role' : 'Manager', 'tabCount' : 5}, 
    {'role' : 'Accountant', 'tabCount' : 5}, 
    {'role' : 'Admin', 'tabCount' : 6}
]

function random_alpha_numeric() {
    let random = ""
    let possible = "ĄČĘĖĮŠŲŪŽąčęėįšųūžABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let a = Math.random() * 256
    for (let i = 0; i < a; i++) 
      random += possible.charAt(Math.floor(Math.random() * possible.length));
    return random;
  }
let random = random_alpha_numeric()

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
// Homework task 3.
it('User login with role Admin, goes to Tasks and create New Task', function () {

    loginPage.visit()
    loginPage.getUser().click({force:true})
    loginPage.getUserName(testUser).click()
    loginPage.getRole().click({force:true})
    loginPage.loginAdmin().click()
    loginPage.submitLogin().click()
// Creating task
    taskPage.clickTask().click()
    taskPage.createTask().click()
    taskPage.taskName().type(random)
    taskPage.typeDetails().type('Jami blynus ir kepi')
    taskPage.billToClients().click()
    taskPage.billYes().click()
    taskPage.hourlyRate().clear().type('66.88')
    taskPage.save().click()
//Going to Tasks page to check if task is saved
    taskPage.clickTask().click() 
    taskPage.typeTaskName().type(random)
    taskPage.checkTask().contains(random)
})
})
