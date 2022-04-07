const contentfulManagement = require("contentful-management")

module.exports = function() {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: 'YOUR TOKEN',
  })

  return contentfulClient
    .getSpace('9c0t9v8n4ww9')
    .then(space => space.getEnvironment('master'))
}