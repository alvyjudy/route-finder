describe("Search address", ()=>{
  it("Search address", ()=>{
    cy.visit("http://localhost:3001/");

    cy.get('[data-cy="Request"]').within(()=>{
      cy.get('[data-cy="PickupLocation"]').within(()=>{
        cy.get('[data-cy="InputField"]').type("1234 Bloor");
        cy.get('[data-cy="SearchResult"]').children().eq(2).click();
        cy.get('[data-cy="DeleteText"]').click();
        cy.get('[data-cy="SearchResult"]').should("not.exist");
        cy.get('[data-cy="InputField"]').type("332 St Claire");
        cy.get('[data-cy="SearchResult"]').children().eq(0).click();
      })

      cy.get('[data-cy="Destination"]').within(()=>{
        cy.get('[data-cy="InputField"]').type("1111 Lawrence Ave");
        cy.get('[data-cy="SearchResult"]').children().eq(0).click();
      })

      cy.get('[data-cy="LoadMap"]').click();
      cy.get('[data-cy="LoadMap"]').click();
    })
  })
})