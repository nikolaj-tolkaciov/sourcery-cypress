import LoginPage from '../objects/loginPage';
import Checks from '../objects/checks';

const login = new LoginPage();
const check = new Checks();

describe('Sourcebooks login', function() {

    it('Should display validation for empty user after attempted loggin', function () {
        login.visit();
        login.getValidationError().should('not.visible')
        login.submit().click();
        login.getValidationError().should('be.visible')
    })

    const roles = [["User", 1], ["Team Lead", 2], ["Manager", 5], ["Accountant", 5], ["Admin", 6]];

    for (let role of roles) {
    it(`Should be able to login with role ${role[0]}`, function () {

                login.visit();
                login.getUserDropdown("Raminta Urbonavičiūtė").click();
                login.getRoleDropdown(role[0]).click();
                login.submit().click();

                check.urlCheck('/time-logging');
                check.titleCheck('Timesheets');
                check.visibilityCheck('.calendar');
                check.visibilityCheck('.tile.form');
                check.contentCheck('.user-info__title', 'Raminta Urbonaviciute');
                check.navLengthCheck('.main-nav', 'li', role[1]);

                check.contentCheck('[aria-current=true]', "Time Logging");
                check.colorCheck('[aria-current=true]', 'rgb(64, 76, 237)');

                login.logout("Raminta Urbonaviciute");
         })
    }
})