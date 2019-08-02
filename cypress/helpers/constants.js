export const USER_ROLES_MAP = {
    "User": "",
    "Team Lead": "role=leads",
    "Manager": "role=managers",
    "Accountant": "role=accountants",
    "Admin": "role=admins"
}

export const ROLES = [
    {
        name: 'User',
        tabs: 1,
    },
    {
        name: 'Team Lead',
        tabs: 2,
    },
    {
        name: 'Manager',
        tabs: 5,
    },
    {
        name: 'Accountant',
        tabs: 5,
    },
    {
        name: 'Admin',
        tabs: 6,
    },
]

export const current_user = {
    firstName: 'Modestas',
    lastName: 'Gujis',
    id: 30,
}

export const getRandomName = () => Math.random().toString().substring(11)
