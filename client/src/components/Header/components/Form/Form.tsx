import style from './styles.module.scss';
import heart from '@/assets/heart.svg';
import userWhite from '@/assets/user-white.svg';
import userGrey from '@/assets/user-grey.svg';
import shoppingCart from '@/assets/shopping-cart.svg';
import shoppingCartWhite from '@/assets/shopping-cart-white.svg';
import { IconButton } from '@/shared/components/IconButton/IconButton';
import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CartData } from '@/pages/Cart/Cart';
import { useAppSelector } from '@/app/hooks';
import { RootState } from '@/app/store';

export const Form: FC = () => {
  const location = useLocation();

  const isActiveCart = location.pathname === '/cart';
  const isActiveLogin = location.pathname === '/login';

  const cart: CartData[] = useAppSelector(
    (state: RootState) => state.cart.cart
  );

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <div className={style.form}>
      <IconButton icon={heart} />
      <Link to="/login">
        <IconButton
          icon={isActiveLogin ? userWhite : userGrey}
          isActive={isActiveLogin}
        />
      </Link>
      <Link className={style.cart_icon_wrapper} to="/cart">
        <IconButton
          icon={isActiveCart ? shoppingCartWhite : shoppingCart}
          isActive={isActiveCart}
        />
        {cartItemCount > 0 && (
          <div className={style.cart_item_count}>{cartItemCount}</div>
        )}
      </Link>
    </div>
  );
};
