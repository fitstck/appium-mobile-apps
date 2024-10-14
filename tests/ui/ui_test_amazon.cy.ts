describe('Amazon Web Test', () => {
  it('Search specific product', () => {
    cy.visit('https://www.amazon.com')
    cy.get('#nav-logo-sprites')
      .should('be.visible') // makesure logo visible

    // start search
    cy.get('#twotabsearchtextbox')
      .should('be.visible')
      .type('iPhone 15 Pro')
    cy.get('#nav-search-submit-button')
      .should('be.visible')
      .click()

    // Validate search result true via URL
    cy.url().should('include', 'k=iPhone+15+Pro')
    cy.wait(3000)
    
    // sorting
    cy.get('span#a-autoid-0-announce')
      .should('be.visible') 
      .click()
    cy.wait(2000)
    cy.get('#s-result-sort-select_1') //low to high
      .should('be.visible')
      .click()
    cy.wait(5000)
    
    // Validate sorting result true via URL
    cy.url().should('include', 'price-asc-rank')

    // product name
    cy.get('span.a-size-medium.a-color-base.a-text-normal').first().then(($productName) => {
      const productName = $productName.text().trim();
      cy.log('Product Name: ' + productName)
      expect(productName).to.include('iPhone 15 Pro')
    })

    // URL product
    cy.get('a.a-link-normal.s-link-style').first().then(($link) => {
      const productUrl = $link.prop('href');
      cy.log('Product URL: ' + productUrl)
      expect(productUrl).to.match(/^https?:\/\/.*amazon\.com\/.*$/)
    })

    // Website
    cy.url().then((url) => {
      const websiteName = new URL(url).hostname;
      cy.log('Website Name: ' + websiteName)
      expect(websiteName).to.equal('www.amazon.com') 
    })

    // price
    cy.get('span.a-price-symbol').first().then(($symbol) => {
      const symbol = $symbol.text().trim(); // Tangkap simbol $
      cy.get('span.a-price-whole').first().then(($whole) => {
        const whole = $whole.text().trim();
        cy.get('span.a-price-fraction').first().then(($fraction) => {
          const fraction = $fraction.text().trim();
          const fullPrice = symbol + whole + '.' + fraction;
          cy.log('Full Price: ' + fullPrice);
          // Validate regex format ($1..99)
          expect(fullPrice).to.match(/^\$\d+(\.\.\d{2})?$/);
        });
      });
    }); 
  })
})
