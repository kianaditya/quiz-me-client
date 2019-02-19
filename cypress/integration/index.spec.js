describe('My First Test', function () {
  beforeEach(() => {
    cy.server()
    cy.route('GET','https://quiz-me-api.herokuapp.com/api/quiz','fixture:quiz.json')
    
  })
  it('Shows quiz questions and answers on front page', function () {
    cy.visit('http://localhost:3000/')
    cy.contains('What is the name of the very first video uploaded to YouTube?')
    cy.contains('Me at the zoo')
  })
})