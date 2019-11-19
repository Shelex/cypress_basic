describe('My First Test', function() {
    it('Does not do much! - 1', function() {
        const urls = {
            investigation: 'someUrl'
        }
      expect(true).to.equal(true)
      cy.visitPage(urls.investigation);
    })
  })