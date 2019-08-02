import { USER_ROLES_MAP, current_user } from '../helpers/constants';

Cypress.Commands.add('loginAs', (role) => {
    window.localStorage.setItem('USER_INFO', `{"id":${current_user.id},"firstName": ${current_user.firstName},"lastName":${current_user.lastName}}`)
    window.localStorage.setItem('ACCESS_TOKEN', `userId=1&${USER_ROLES_MAP[role]}`)
})