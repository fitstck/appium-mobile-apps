describe('testing ui', () => {
  it('validate provider', () => {
    var languageToggle = 'label[for="toggle"]'
    var headerText = '#home-hero > div > h3.chakra-heading'
    var subheaderText = '#home-hero > div > h1.chakra-text'
    var productBtnHeaderID = '#popover-trigger-17'
    var careerBtnHeaderID = '#popover-trigger-8'
    var productBtnHeaderEN = '#popover-trigger-12'
    var careerBtnHeaderEN = '#popover-trigger-11'
    var learnMoreDigitalProduct = '[href="/en/produk-digital"]'
    var indosatLogo = '[alt="Indosat"]'
    var smartfrenLogo = '[alt="Smartfren"]'
    var telkomselLogo = '[alt="Telkomsel"]'
    var triLogo = '[alt="Tri"]'
    var xlLogo = '[alt="XL"]'

    cy.visit('https://flip.id')

    cy.get(headerText).should('have.text', 'Bebas transaksi, ke siapa aja.')
    cy.get(subheaderText).should('have.text', 'Transfer beda bank, top up e-wallet, kirim uang ke luar negeri, dan beli produk digital. Semua lebih terjangkau!')
    cy.get(productBtnHeaderID).should('have.text', 'Produk')
    cy.get(careerBtnHeaderID).should('have.text', 'Karir')

    cy.get(languageToggle).click()

    cy.get(headerText).should('have.text', 'Free financial transactions, to anyone.')
    cy.get(subheaderText).should('have.text', 'Transfer from different banks, top up e-wallet, send money abroad, and buy digital products. All with lower cost!')
    cy.get(productBtnHeaderEN).should('have.text', 'Product')
    cy.get(careerBtnHeaderEN).should('have.text', 'Career')

    cy.get(learnMoreDigitalProduct).scrollIntoView()
    cy.get(learnMoreDigitalProduct).click()

    cy.url().should('include', '/produk-digital');

    cy.get(indosatLogo).should('be.visible')
    cy.get(smartfrenLogo).should('be.visible')
    cy.get(telkomselLogo).should('be.visible')
    cy.get(triLogo).should('be.visible')
    cy.get(xlLogo).should('be.visible')
  })

  it('validate send money across country', () => {
    
  })
})
