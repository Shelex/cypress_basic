describe('My Second Test', function() {
    it('Does not do much! - 2', function() {
        const urls = {
            investigation: 'someUrl'
        }
      expect(true).to.equal(true)
      cy.visitPage(urls.investigation);
    })
  })