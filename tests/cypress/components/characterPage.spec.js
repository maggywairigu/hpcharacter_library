describe('Character Details Page', () => {
    const sampleCharacter = {
      id: "9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8",
      name: 'Harry Potter',
      image: "https://ik.imagekit.io/hpapi/harry.jpg",
      dateOfBirth: 'July 31, 1980',
      yearOfBirth: '1980',
      wizard: 'Yes',
      species: 'Human',
      gender: 'Male',
      house: 'Gryffindor',
      ancestry: 'Half-blood',
      eyeColour: 'Green',
      hairColour: 'Black',
      alternate_names: [],
    };
  
    beforeEach(() => {
      cy.intercept('GET', '**/character/*', {
        fixture: 'characterDetails.json', 
      }).as('getCharacter');
      
      // Navigate to the character details page
      cy.visit(`/characters/${sampleCharacter.id}`);
      cy.wait('@getCharacter');
    });
  
    it('displays character details', () => {
      cy.get('.char-name').should('contain', sampleCharacter.name);
      cy.get('.char-dob').should('contain', sampleCharacter.dateOfBirth);
      cy.get('.char-yob').should('contain', sampleCharacter.yearOfBirth);
      cy.get('.char-wizard').should('contain', 'Yes');
      cy.get('.char-species').should('contain', sampleCharacter.species);
      cy.get('.char-gender').should('contain', sampleCharacter.gender);
      cy.get('.char-house').should('contain', sampleCharacter.house);
      cy.get('.char-ancestry').should('contain', sampleCharacter.ancestry);
      cy.get('.char-eyeColour').should('contain', sampleCharacter.eyeColour);
      cy.get('.char-hairColour').should('contain', sampleCharacter.hairColour);
    });
  
    it('handles error when character data fetching fails', () => {
      cy.intercept('GET', '**/character/*', {
        statusCode: 500,
        body: 'Error fetching character details',
      }).as('getCharacterError');
  
      cy.visit(`/characters/${sampleCharacter.id}`);
      cy.wait('@getCharacterError');
  
      cy.contains('Error: Error fetching character details').should('be.visible');
    });
  
    it('navigates back to characters list on "Back" button click', () => {
      cy.get('.custom-button').click();
      cy.url().should('include', '/characters');
    });
  });