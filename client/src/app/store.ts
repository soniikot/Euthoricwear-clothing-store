import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/products/productsSlice';
import cartReducer from '../features/cart/cartSlice';
import categoryReducer from '../features/categories/categoriesSlice';
import searchReducer from '../features/Search/SearchSlice';
import filterReducer from '../features/filter/filterSlice';
import useReducer from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    categories: categoryReducer,
    search: searchReducer,
    filter: filterReducer,
    user: useReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
