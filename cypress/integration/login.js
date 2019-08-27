import {login, actions, supplier} from './classes'

const lg = new login();
const act = new actions();
const sup = new supplier();

const supplierName = Math.random().toString(36).substring(2, 12);
const randString = Math.random().toString(36).substring(2, 10);
const price = (Math.random() * (100 - 0.1) + 0.1).toFixed(2);
const count = Math.floor(Math.random() * 101);

describe('Lunch app', function() {

    it('Should be able to login', function () {

        lg.login('admin@green.vln', 'Apple000', '.v-btn')
    })

    it('Should be able to create a supplier', function() {
        act.objContainsClick('.v-list__tile__title', 'Patiekalų Redagavimas');
        act.click('.v-speed-dial');
        act.objContainsClick('.v-icon', 'add');
        act.typeIn('[name="Provider Name"]', supplierName);
        act.click('[name="Provider Color"]');
        act.objContainsShouldClick('.v-list__tile__content', 'Red', 'be.visible');
        sup.mealInfoFill(price, count, randString, 0);
        act.clickOn('.v-list__group__header__append-icon',1);
        sup.mealInfoFill(price, count, randString, 1);
        act.objContainsClick('.v-btn__content', 'Save');
    })
})