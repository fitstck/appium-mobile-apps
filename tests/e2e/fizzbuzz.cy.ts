describe('FizzBuzz Array Test in TypeScript', () => {
    it('Generates a FizzBuzz array', () => {
      // Define the FizzBuzz function with TypeScript
      const fizzBuzz = (n: number): string[] => {
        const result: string[] = []; // Result will be an array of strings
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
  
      // Expected result for numbers 1 to 20
      const expected: string[] = [
        '1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz',
        '11', 'Fizz', '13', '14', 'FizzBuzz', '16', '17', 'Fizz', '19', 'Buzz'
      ];
  
      // Call the fizzBuzz function
      const result = fizzBuzz(20);
  
      // Use Cypress assertion to verify the result
      expect(result).to.deep.equal(expected);
    });
  });
  