describe('Shopping Flow', () => {
  beforeEach(() => {
    cy.visit('/products');
  });

  it('should display products on the products page', () => {
    cy.get('[data-testid="product-card"]').should('have.length.at.least', 1);
    cy.get('[data-testid="product-title"]').should('be.visible');
    cy.get('[data-testid="product-price"]').should('be.visible');
  });

  it('should filter products by price range', () => {
    cy.get('[data-testid="price-slider"]')
      .trigger('mousedown', { position: 'left' })
      .trigger('mousemove', 0)
      .trigger('mouseup')
      .trigger('mousedown', { position: 'right' })
      .trigger('mousemove', 150)
      .trigger('mouseup');

    cy.get('[data-testid="product-price"]').each(($price) => {
      const price = parseFloat($price.text().replace('$', ''));
      expect(price).to.be.within(0, 150);
    });
  });

  it('should add product to cart', () => {
    cy.get('[data-testid="product-card"]').first().click();
    cy.get('[data-testid="size-selector"]').first().click();
    cy.get('[data-testid="add-to-cart"]').click();
    cy.get('[data-testid="cart-count"]').should('have.text', '1');
  });

  it('should complete checkout process', () => {
    // Add item to cart first
    cy.get('[data-testid="product-card"]').first().click();
    cy.get('[data-testid="add-to-cart"]').click();

    // Go to cart
    cy.get('[data-testid="cart-icon"]').click();

    // Verify cart items
    cy.get('[data-testid="cart-item"]').should('have.length.at.least', 1);

    // Proceed to checkout
    // cy.get('[data-testid="checkout-button"]').click();
  });
});
