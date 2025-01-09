import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Cart } from '../pages/Cart/Cart';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import userReducer from '../features/user/userSlice';
import testImage from '../assets/sample1.jpg';

// Test store setup
const createTestStore = (preloadedState = {}) => {
  return configureStore({
    reducer: {
      cart: cartReducer,
      user: userReducer,
    },
    preloadedState,
  });
};

// Wrapper utility
const renderWithProviders = (preloadedState = {}) => {
  const store = createTestStore(preloadedState);
  return render(
    <Provider store={store}>
      <BrowserRouter>
        <Cart />
      </BrowserRouter>
    </Provider>
  );
};

// Test data preparation
const sampleCartItem = {
  id: 1,
  title: 'Test Product',
  price: 29.99,
  img: testImage,
  quantity: 1,
};

const SINGLE_ITEM_PRICE = /29.99/i;
const MULTIPLE_ITEMS_TOTAL = /99.94/i;

const cartItems = [
  { id: 1, title: 'Test Product', price: 29.99, img: testImage, quantity: 1 },
  { id: 2, title: 'Second Product', price: 19.99, img: testImage, quantity: 2 },
  { id: 3, title: 'Third Product', price: 9.99, img: testImage, quantity: 3 },
];

describe('Cart Component', () => {
  describe('when the cart is empty', () => {
    test('renders empty cart message', () => {
      renderWithProviders({
        cart: { cart: [] },
        user: { username: '' },
      });

      const emptyCartMessage = screen.getByText(
        /You haven't chosen anything yet/i
      );
      expect(emptyCartMessage).toBeInTheDocument();
    });
  });

  describe('when the cart has items', () => {
    test('displays correct total amount for single item', () => {
      renderWithProviders({
        cart: { cart: [sampleCartItem] },
        user: { username: '' },
      });

      const totalAmount = screen.getAllByText(SINGLE_ITEM_PRICE);
      expect(totalAmount).toHaveLength(4);
    });

    test('displays correct total amount for multiple items', () => {
      renderWithProviders({
        cart: { cart: cartItems },
        user: { username: '' },
      });

      const totalAmount = screen.getAllByText(MULTIPLE_ITEMS_TOTAL);
      expect(totalAmount).toHaveLength(2);
    });

    test('removes an item from the cart', () => {
      renderWithProviders({
        cart: { cart: cartItems },
        user: { username: '' },
      });

      const productRow = screen
        .getByText('Second Product')
        ?.closest('.container');
      if (!productRow) {
        throw new Error('Product row not found');
      }
      const deleteImage = productRow.querySelector('img[alt="delete"]');
      if (!deleteImage) {
        throw new Error('Delete image not found');
      }
      const deleteButton = deleteImage.parentElement;
      if (!deleteButton) {
        throw new Error('Delete button not found');
      }
      fireEvent.click(deleteButton);

      expect(screen.queryByText('Second Product')).not.toBeInTheDocument();
    });
  });
});
