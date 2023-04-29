const { defineConfig } = require("cypress");
module.exports = defineConfig({
  videoCompression: 15,
})

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  e2e:{
    setupNodeEvents(on, config) {
      on('after:spec', (spec, results) => {
        if (results && results.video) {
          // Do we have failures for any retry attempts?
          const failures = results.tests.some((test) =>
            test.attempts.some((attempt) => attempt.state === 'failed')
          )
          if (!failures) {
            // delete the video if the spec passed and no tests retried
            fs.unlinkSync(results.video)
          }
        }
      })
    },
  },
  setupNodeEvents(on, config) {
    // implement node event listeners here
  },
},
)
