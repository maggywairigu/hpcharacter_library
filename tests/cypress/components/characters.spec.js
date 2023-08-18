describe('Characters Page', () => {
    beforeEach(() => {
      cy.intercept('GET', '**/characters', {
        fixture: 'characters.json', 
      }).as('getCharacters');
  
      cy.visit('/characters');
      cy.wait('@getCharacters');
    });
  
    it('displays characters', () => {
      cy.get('[data-testid="character-card"]').should('have.length.greaterThan', 0);
    });
  
    it('filters characters by name using search', () => {
      cy.get('[data-testid="search-input"]').type('Harry');
      cy.get('[data-testid="character-card"]').should('have.length', 1);
      cy.get('[data-testid="character-card"]').contains('Harry Potter');
    });
  
    it('displays "No Search Results Found" when no characters match search', () => {
      cy.get('[data-testid="search-input"]').type('Non-existent Character');
      cy.get('[data-testid="character-card"]').should('not.exist');
      cy.contains('No Search Results Found').should('be.visible');
    });
  });