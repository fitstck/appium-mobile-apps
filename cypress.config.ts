import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    supportFile: false,
    specPattern: "tests/**/*.cy.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      on('task', {
        getInputN() {
          // Input `n` bisa dikirim dari CLI atau environment
          const n = parseInt(process.env.FIZZBUZZ_N || '30', 10); // Default 30
          return n;
        },
      });
    },
  },
});
