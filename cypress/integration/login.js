

import LoginPage from "../objects/loginPage";
import MainPage from "../objects/mainPage";

const loginPage = new LoginPage();
const mainPage = new MainPage();

describe('devbstaging automated testing', function () {

    const credentials = require("../helpers/credentials")
    const email = credentials.email;
    const passwd = credentials.password;
    const mainDishName = 'Lazanija';
    const soupName = 'Sriuba';

    it('Should be able to login and select dish', function () {

        // Login
        cy.visit('/');
        loginPage.getEmailField().click().type(email);
        loginPage.getPasswordField().click().type(passwd);
        loginPage.getLoginButton().click();

        // Select weekday (1 equals Monday, 2 - Tuesday...)
        mainPage.getWeekday(5).click();

        // Select dish and verify selection
        mainPage.getMainDish().contains(mainDishName).click();
        mainPage.getSelectedItemsList().contains(mainDishName);
        mainPage.getSoup().contains(soupName).click();
        mainPage.getSelectedItemsList().contains(soupName);
        mainPage.getOrderButton().click();
    })
})