describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('src/index.html')
  })

  it('verifica o título da aplicação', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');
  })

  it('Mensagem: Valide os campos obrigatórios!', () => {
    cy.get('#firstName').type('Jorge')
    cy.get('#lastName').type('Dela Lafon')
    cy.get('#email').type('teste')

    cy.get('.button').click()
    cy.get('.error').should('be.visible').invoke('text')
      .then((texto) => {
        expect(texto.trim()).to.include('Valide os campos obrigatórios!')
      })
  })

  it('Sucess!', () => {
    cy.get('#firstName').type('Chico')
    cy.get('#lastName').type('Bento')
    cy.get('#email').type('matheus@gmail.com')
    cy.get('#open-text-area').type('esse é o teste')

    cy.get('.button').click()
    cy.get('.success').should('be.visible').invoke('text')
      .then((texto) => {
        expect(texto.trim()).to.include('Mensagem enviada com sucesso.')
      })
  })
})