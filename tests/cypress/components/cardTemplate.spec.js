describe('Character Card Template', () => {
    const sampleCharacter = {
      image: "https://ik.imagekit.io/hpapi/harry.jpg",
      name: 'Harry Potter',
      dateOfBirth: "31-07-1980",
      id: "9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8",
    };
  
    beforeEach(() => {
      cy.visit(`/characters/${sampleCharacter.id}`);
    });
  
    it('displays character details on the card', () => {
      cy.get('[data-testid="character-name"]').should('contain', sampleCharacter.name);
      cy.get('[data-testid="character-dob"]').should('contain', sampleCharacter.dateOfBirth);
      cy.get('[data-testid="character-image"]').should('have.attr', 'alt', sampleCharacter.name);
    });
  
    it('navigates to character details page on "View" link click', () => {
      cy.get('[data-testid="view-link"]').click();
      cy.url().should('include', `/characters/${sampleCharacter.id}`);
    });
  });