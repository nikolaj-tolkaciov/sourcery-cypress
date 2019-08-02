const USER_ROLES_MAP = {
    "User": "",
    "Team Lead": "role=leads",
    "Manager": "role=managers",
    "Accountant": "role=accountants",
    "Admin": "role=admins"
}

Cypress.Commands.add('loginAs', (role) => {
    window.localStorage.setItem('USER_INFO', '{"id":1,"firstName":"Jaunius","lastName":"Mykolaitis"}')
    window.localStorage.setItem('ACCESS_TOKEN', `userId=36&${USER_ROLES_MAP[role]}`)
})

