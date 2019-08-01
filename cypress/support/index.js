import './commands'

const credentials = require("../helpers/credentials")
Cypress.config('baseUrl', `https://${credentials.user}:${credentials.password}@d3tmsdgt9iu294.cloudfront.net`)