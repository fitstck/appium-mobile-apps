import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    supportFile: false,
    specPattern: "tests/**/*.cy.{js,jsx,ts,tsx}",
    // setupNodeEvents(on, config) {
    //   on('task', {
    //     log (message) {
    //       console.log(message)
    //       return null
    //     }
    //   })
    // },
  },
})
