describe('My First Test', function () {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('Does not do much!', function () {
    cy.contains('Hello World')
  })
})