import { createBrowserRouter } from 'react-router-dom';
import { Homepage } from '../pages/HomePage/Homepage';
import { ProductPage } from '../pages/ProductPage/ProductPage';
import { ProductsPage } from '../pages/ProductsPage/ProductsPage';
import { AboutPage } from '../pages/AboutPage/AboutPage';
import { Layout } from './Layout';
import { Cart } from '@/pages/Cart/Cart';
import ScrollToTop from '@/helpers/ScrollToTop';
import { LoginPage } from '@/pages/LoginPage/LoginPage';
import RegistrationPage from '@/pages/RegistationPage/RegistationPage';
import { FavPage } from '@/pages/FavPage/FavPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ScrollToTop>
        <Layout />
      </ScrollToTop>
    ),
    children: [
      {
        path: '/',
        element: (
          <ScrollToTop>
            <Homepage />
          </ScrollToTop>
        ),
      },
      {
        path: '/products/',
        element: (
          <ScrollToTop>
            <ProductsPage />
          </ScrollToTop>
        ),
      },
      {
        path: '/product/:id',
        element: (
          <ScrollToTop>
            <ProductPage />
          </ScrollToTop>
        ),
      },
      {
        path: '/cart/',
        element: (
          <ScrollToTop>
            <Cart />
          </ScrollToTop>
        ),
      },
      {
        path: '/about/',
        element: (
          <ScrollToTop>
            <AboutPage />
          </ScrollToTop>
        ),
      },
      {
        path: '/login/',
        element: (
          <ScrollToTop>
            <LoginPage />
          </ScrollToTop>
        ),
      },
      {
        path: '/sign-in/',
        element: (
          <ScrollToTop>
            <RegistrationPage />
          </ScrollToTop>
        ),
      },
      {
        path: '/likes/',
        element: (
          <ScrollToTop>
            <FavPage />
          </ScrollToTop>
        ),
      },
    ],
  },
]);
