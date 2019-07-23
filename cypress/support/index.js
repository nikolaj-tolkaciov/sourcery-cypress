import './commands'

const credentials = require("../helpers/credentials")
Cypress.config('baseUrl', `https://${credentials.user}:${credentials.password}@dq508exvr03rj.cloudfront.net`)