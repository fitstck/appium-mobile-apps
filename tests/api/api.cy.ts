context("GET /public/v2/todos", () => {
  var baseUrl = 'https://gorest.co.in'
  it("validate only 10 todos", () => {
    cy.request("GET", baseUrl + "/public/v2/todos").then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.length).to.be.eql(10)
    })
  })

  it("validate inactive user", () => {
    var inactiveUserId:String[] = ['6930028','6930022','6925904','6925903', '6925909']; 
    cy.request("GET", baseUrl + "/public/v2/users").then((response) => {
      expect(response.status).to.eq(200)
      for (const dataUser of response.body) {
        if (inactiveUserId.includes(dataUser.id.toString())) {
          expect(dataUser.status).to.eq('inactive')
        }
      }
    })
  })
})
