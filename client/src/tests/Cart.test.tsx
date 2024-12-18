import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Cart } from '../pages/Cart/Cart';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import userReducer from '../features/user/userSlice';

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

test('renders empty cart message when cart is empty', () => {
  renderWithProviders({
    cart: { cart: [] },
    user: { username: '' },
  });

  expect(
    screen.getByText(/You haven't chosen anything yet/i)
  ).toBeInTheDocument();
});

describe('Cart Component', () => {
  // Sample cart item for testing
  const sampleCartItem = {
    id: 1,
    title: 'Test Product',
    price: 29.99,
    img: '/test.jpg',
    quantity: 1,
  };

  test('displays correct total amount for single item', () => {
    renderWithProviders({
      cart: { cart: [sampleCartItem] },
      user: { username: '' },
    });

    expect(screen.getAllByText(/29.99/i)).toHaveLength(4);
  });
});

test('displays correct total amount for multiple items', () => {
  const sampleCartItem = {
    id: 1,
    name: 'Sample Item',
    quantity: 1,
    price: 29.99,
  };

  const cartItems = [
    sampleCartItem,
    { ...sampleCartItem, id: 2, quantity: 2, price: 19.99 },
    { ...sampleCartItem, id: 3, quantity: 3, price: 9.99 },
  ];
  // Total should be: 29.99 + (19.99 * 2) + (9.99 * 3) = 89.94

  renderWithProviders({
    cart: { cart: cartItems },
    user: { username: '' },
  });
  expect(screen.getAllByText(/99.94/i)).toHaveLength(2);
});
