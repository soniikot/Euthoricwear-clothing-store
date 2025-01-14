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
      .trigger('mousemove', { clientX: 0, clientY: 0 })
      .trigger('mouseup')
      .trigger('mousedown', { position: 'right' })
      .trigger('mousemove', { clientX: 150, clientY: 0 })
      .trigger('mouseup');

    cy.get('[data-testid="product-price"]').each(($price) => {
      const price = parseFloat($price.text().replace('$', ''));
      expect(price).to.be.within(0, 150);
    });
  });

  it('should add product to cart', () => {
    cy.get('[data-testid="product-card"]').first().click();
    cy.get('[data-testid="size-buttons"]').find('button').first().click();
    cy.get('[data-testid="add-to-cart"]').find('button').click();
    cy.get('.Toastify__toast-body').should('contain', 'Product added to cart');
    cy.get('[data-testid="cart-icon"]').click();
    cy.get('[data-testid="cart-item"]').should('have.length.at.least', 1);
  });
});
