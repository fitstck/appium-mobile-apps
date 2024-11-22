describe('Dynamic FizzBuzz Test with Input n from JSON', () => {
    it('Generates a FizzBuzz array based on input from JSON', () => {
      cy.fixture('fizzbuzzInput.json').then((data) => {
        const n: number = data.n;
  
        const fizzBuzz = (n: number): string[] => {
          const result: string[] = [];
          for (let i = 1; i <= n; i++) {
            if (i % 15 === 0) {
              result.push('FizzBuzz');
            } else if (i % 3 === 0) {
              result.push('Fizz');
            } else if (i % 5 === 0) {
              result.push('Buzz');
            } else {
              result.push(i.toString());
            }
          }
          return result;
        };
  
        const result = fizzBuzz(n);
  
        // Validate array length
        expect(result).to.have.length(n);
        cy.log(result.join(', ')); // Print result to Cypress logs
      });
    });
  });
  