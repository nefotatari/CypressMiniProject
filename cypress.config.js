const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demo.nopcommerce.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity : false,
    screenshotOnRunFailure : true,
    reporter: 'junit',
    reporterOptions: {
      mochaFile: 'results/test-output-[hash].xml',
      html: true
    }
  },
});
