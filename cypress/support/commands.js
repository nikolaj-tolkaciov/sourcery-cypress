const USER_ROLES_MAP = {
    "User": "",
    "Team Lead": "role=leads",
    "Manager": "role=managers",
    "Accountant": "role=accountants",
    "Admin": "role=admins"
}

Cypress.Commands.add('loginAs', (role) => {
    window.localStorage.setItem('USER_INFO', '{"id":33,"firstName":"Edvinas","lastName":"Kveselys"}')
    window.localStorage.setItem('ACCESS_TOKEN', `userId=33&${USER_ROLES_MAP[role]}`)
})

