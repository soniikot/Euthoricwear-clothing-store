import style from './styles.module.scss';
import { PlusMinusButton } from './components/PlusMinusButton/PlusMinusButton';
import iconDelete from '@/assets/deleteicon.svg';
import { TextButtonWithLink } from '@/shared/components/TextButtonWithLink/TextButtonWithLink';
import clsx from 'clsx';
import { useAppSelector } from '@/app/hooks';
import { RootState } from '@/app/store';
import { useAppDispatch } from '@/app/hooks';
import { removeItem, applyDiscount } from '../../features/cart/cartSlice';
import { FC, useState } from 'react';
import { EmptyList } from '@/components/EmptyList/EmptyList';
import { PaymentButton } from '@/components/PaymentButton/PaymentButton';
import { Link } from 'react-router-dom';

export interface CartData {
  id: number;
  title: string;
  price: number;
  img: string;

  size: string;
  quantity: number;
}

export const Cart: FC = () => {
  const [couponCode, setCouponCode] = useState('');
  const [_discountApplied, setDiscountApplied] = useState(false);
  const [message, setMessage] = useState('');

  const cart: CartData[] = useAppSelector(
    (state: RootState) => state.cart.cart
  );

  const dispatch = useAppDispatch();

  const handleDeleteItem = (id: number) => {
    dispatch(removeItem(id));
  };

  const getSubtotalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total;
  };

  const handleCouponChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCouponCode(event.target.value);
  };

  const handleApplyCoupon = () => {
    if (couponCode === 'DISCOUNT10') {
      const discount = 0.1;

      const updatedCart = cart.map((item) => ({
        ...item,
        price: item.price * (1 - discount),
      }));

      dispatch(applyDiscount(updatedCart));
      setDiscountApplied(true);
      setMessage('Coupon applied successfully!');
    } else {
      setMessage('Invalid coupon code.');
    }
  };

  return (
    <>
      <div className="container">
        <div className={style.text}>
          <p className={style.grey}>
            Please fill in the fields below and click place order to complete
            your purchase!
          </p>
          <p className={style.grey}>
            Already registered?
            <a href="" className="purple">
              <span className="purple">
                <Link to="/login"> Please login here</Link>
              </span>
            </a>
          </p>
        </div>
      </div>

      {cart.length === 0 && <EmptyList text="You haven't chose anything yet" />}
      {cart.length > 0 && (
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
      {cart.length > 0 &&
        cart.map((product) => (
          <div key={product.id} className={clsx(style.grid_row, 'container')}>
            <div className={style.description}>
              <div className={style.image_container}>
                <img
                  className={style.image}
                  src={import.meta.env.VITE_API_UPLOAD_URL + product.img}
                  alt="clothes"
                />
              </div>
              <div className={style.description_text}>
                <h5 className={style.product_title}>{product.title}</h5>
                <p className={style.small_gray}>Color:{product.color} </p>
                <p className={style.small_gray}>Size:{product.size} </p>
              </div>
            </div>
            <div className={style.price}>${product.price}</div>
            <div className={style.quantity}>
              <PlusMinusButton id={product.id} count={product.quantity} />
            </div>
            <div className={style.shipping}>FREE</div>
            <div className={style.subtotal}>
              ${product.quantity * product.price}
            </div>
            <div className={style.action}>
              <button
                onClick={() => {
                  handleDeleteItem(product.id);
                }}
              >
                <img src={iconDelete} alt="delete" />
              </button>
            </div>
          </div>
        ))}
      {cart.length > 0 && (
        <div className={clsx(style.bottom, 'container')}>
          <div className={style.discount_wrapper}>
            <h4>Discount Codes</h4>
            <p className={style.grey}>Enter your coupon code if you have one</p>
            <form className={style.form} onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                onChange={handleCouponChange}
                placeholder="Enter coupon code"
              />
              <input
                type="button"
                className={style.button}
                value="Apply Coupon"
                onClick={handleApplyCoupon}
              />
            </form>

            {message && <p className={style.message}>{message}</p>}

            <TextButtonWithLink
              text="Continue Shopping"
              buttonColor="white"
              link="/products/"
            />
          </div>

          <div className={style.total}>
            <div className={style.text}>
              <h4 className={style.sub_total}>
                <span>Sub Total:</span>
                <span className={style.price}>${getSubtotalPrice()}</span>
              </h4>
              <h4 className={style.sub_total}>
                <span>Shipping</span>
                <span className={style.price}>Free</span>
              </h4>
              <h4 className={style.sub_total}>
                <span>Grand Total:</span>
                <span className={style.price}>${getSubtotalPrice()}</span>
              </h4>
            </div>
            <PaymentButton cart={cart} />
          </div>
        </div>
      )}
    </>
  );
};
