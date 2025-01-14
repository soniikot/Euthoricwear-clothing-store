describe('Filter Functionality', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should filter by category', () => {
    cy.get('[data-testid="category-filter"]').click();
    cy.get('[data-testid="category-option"]').first().click();
    cy.get('[data-testid="product-card"]').should('have.length.at.least', 1);
  });

  it('should filter by color', () => {
    cy.get('[data-testid="color-filter"]').click();
    cy.get('[data-testid="color-option"]').first().click();
    cy.get('[data-testid="product-card"]').should('have.length.at.least', 1);
  });

  it('should filter by size', () => {
    cy.get('[data-testid="size-filter"]').click();
    cy.get('[data-testid="size-option"]').first().click();
    cy.get('[data-testid="product-card"]').should('have.length.at.least', 1);
  });

  it('should reset all filters', () => {
    // Apply some filters first
    cy.get('[data-testid="category-filter"]').click();
    cy.get('[data-testid="category-option"]').first().click();

    // Reset filters
    cy.get('[data-testid="reset-filters"]').click();

    // Verify filters are reset
    cy.get('[data-testid="product-card"]').should('have.length.at.least', 1);
  });
});
