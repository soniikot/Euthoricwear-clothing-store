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

describe('Cart Component', () => {
  test('renders empty cart message when cart is empty', () => {
    renderWithProviders({
      cart: { cart: [] },
      user: { username: '' },
    });

    expect(
      screen.getByText(/You haven't chosen anything yet/i)
    ).toBeInTheDocument();
  });
});
