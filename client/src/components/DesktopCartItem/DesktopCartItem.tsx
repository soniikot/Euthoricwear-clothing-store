import { PlusMinusButton } from '@/pages/Cart/components/PlusMinusButton/PlusMinusButton';
import iconDelete from '@/assets/deleteicon.svg';
import style from './styles.module.scss';
import { CartData } from '@/pages/Cart/Cart';
import { FC } from 'react';
import clsx from 'clsx';

interface DesktopCartItemProps {
  cart: CartData[];
  handleDeleteItem: (id: number) => void;
}
export const DesktopCartItem: FC<DesktopCartItemProps> = ({
  cart,
  handleDeleteItem,
}) => {
  return (
    <>
      {cart &&
        cart.length > 0 &&
        cart.map((product) => (
          <div
            key={product.id}
            className={clsx(style.grid_row, 'container')}
            data-testid="cart-item"
          >
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
                <p className={style.small_gray}>Color: {product.color}</p>
                <p className={style.small_gray}>Size: {product.size}</p>
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
    </>
  );
};
