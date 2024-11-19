import style from './styles.module.scss';
import clsx from 'clsx';
import { useAppSelector } from '@/app/hooks';
import { RootState } from '@/app/store';
import { useAppDispatch } from '@/app/hooks';
import { removeItem } from '../../features/cart/cartSlice';
import { FC } from 'react';
import { EmptyList } from '@/components/EmptyList/EmptyList';
import { PaymentButton } from '@/components/PaymentButton/PaymentButton';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { DesktopCartItem } from '@/components/DesktopCartItem/DesktopCartItem';
import { MobileCartItem } from '@/components/MobileCartItem/MobileCartItem';

export interface CartData {
  id: number;
  title: string;
  price: number;
  img: string;
  color: string;
  size: string;
  quantity: number;
}

export const Cart: FC = () => {
  const cart: CartData[] = useAppSelector(
    (state: RootState) => state.cart.cart
  );
  const dispatch = useAppDispatch();

  const username = useAppSelector((state: RootState) => state.user.username);

  const handleDeleteItem = (id: number) => {
    dispatch(removeItem(id));
  };

  const getSubtotalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  const isMobile = useMediaQuery('(max-width: 500px)');

  return (
    <>
      <div className="container">
        <div className={style.text}>
          <p className={style.grey}>
            Please fill in the fields below and click place order to complete
            your purchase!
          </p>
          {username === '' && (
            <div className={style.register}>
              <p className={style.grey}>
                Already registered?
                <a href="" className="purple">
                  <span className="purple">
                    <Link to="/login"> Please login here</Link>
                  </span>
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
      <div className={style.wrapper}>
        {cart && cart.length === 0 && (
          <EmptyList text="You haven't chosen anything yet" />
        )}
        {cart && cart.length > 0 && (
          <div>
            <div className={style.container}>
              <div className={clsx(style.grid_row_header, 'container')}>
                <div className={style.header_text}>PRODUCT DETAILS</div>
                <div className={style.header_text}>PRICE</div>
                <div className={style.header_text}>QUANTITY</div>
                <div className={style.header_text}>SHIPPING</div>
                <div className={style.header_text}>SUBTOTAL</div>
                <div className={style.header_text}>ACTION</div>
              </div>
            </div>
          </div>
        )}
        {isMobile ? (
          <MobileCartItem cart={cart} handleDeleteItem={handleDeleteItem} />
        ) : (
          <DesktopCartItem cart={cart} handleDeleteItem={handleDeleteItem} />
        )}

        {cart && cart.length > 0 && (
          <div className={clsx(style.bottom, 'container')}>
            <div className={style.total}>
              <div className={style.text}>
                <h4 className={style.sub_total}>
                  <span>Sub Total:</span>
                  <span className={style.price}>
                    ${getSubtotalPrice().toFixed(2)}
                  </span>
                </h4>
                <h4 className={style.sub_total}>
                  <span>Shipping</span>
                  <span className={style.price}>Free</span>
                </h4>
                <h4 className={style.sub_total}>
                  <span>Grand Total:</span>
                  <span className={style.price}>${totalPrice.toFixed(2)}</span>
                </h4>
              </div>
              <PaymentButton cart={cart} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};
