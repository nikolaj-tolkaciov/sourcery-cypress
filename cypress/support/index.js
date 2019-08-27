import './commands'

const credentials = require("../helpers/credentials")
Cypress.config('baseUrl', `https://${credentials.user}:${credentials.password}@lunch.devbstaging.com/login-password`)