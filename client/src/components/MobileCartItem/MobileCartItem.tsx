import { PlusMinusButton } from '@/pages/Cart/components/PlusMinusButton/PlusMinusButton';
import iconDelete from '@/assets/deleteicon.svg';
import style from './styles.module.scss';
import { CartData } from '@/pages/Cart/Cart';
import { FC } from 'react';
import clsx from 'clsx';

interface MobileCartItemProps {
  cart: CartData[];
  handleDeleteItem: (id: number) => void;
}
export const MobileCartItem: FC<MobileCartItemProps> = ({
  cart,
  handleDeleteItem,
}) => {
  return (
    <>
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
                <p className={style.small_gray}>Color: {product.color}</p>
                <p className={style.small_gray}>Size: {product.size}</p>{' '}
                <div className={style.price}>Price: ${product.price}</div>
              </div>
            </div>
            <div className={style.bottom}>
              <div className={style.quantity}>
                <PlusMinusButton id={product.id} count={product.quantity} />
                <div className={style.action}>
                  <button
                    className={style.delete_button}
                    onClick={() => {
                      handleDeleteItem(product.id);
                    }}
                  >
                    <img src={iconDelete} alt="delete" />
                  </button>
                </div>
              </div>
              <div className={style.subtotal}>
                <p>Shipping: FREE</p>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};
