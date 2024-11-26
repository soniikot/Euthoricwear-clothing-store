import { useState } from 'react';
import style from './styles.module.scss';
import message from '@/assets/message.svg';
import stars from '@/assets/3and5stars.png';
import { TextButton } from '@/shared/components/TextButton/TextButton';
import { IconButtonWithText } from '@/shared/components/IconButtonWIthText/IconButtonWithText';
import cart from '@/assets/shopping-cart-white.svg';
import cc from '@/assets/cc.svg';
import fit from '@/assets/fit.svg';
import shipping from '@/assets/shipping.svg';
import returns from '@/assets/return.svg';
import { Feature } from './components/Feature/Feature';
import { useAppSelector } from '@/app/hooks';
import { RootState } from '@/app/store';
import { FC } from 'react';
import { useAppDispatch } from '@/app/hooks';
import { addToCart } from '@/features/cart/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import clsx from 'clsx';
import { Links } from './components/Links/Links';

interface ProductDescriptionProps {
  id: number;
}

export const ProductsDescription: FC<ProductDescriptionProps> = ({ id }) => {
  const { products } = useAppSelector((state: RootState) => state.products);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  const dispatch = useAppDispatch();

  const product = products.find((prod) => prod.id === id);

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Please select a size before adding to cart', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    if (product) {
      dispatch(
        addToCart({
          id: product.id,
          quantity: 1,
          title: product.attributes.title,
          price: product.attributes.price,
          img: product.attributes.img.data.attributes.url,
          color: product.attributes.color,
          size: selectedSize,
        })
      );
      toast.success('Product added to cart!');
    } else {
      toast.error('Product not found!');
    }
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <div className={style.details}>
        <h5>
          <Links id={id} />
        </h5>
        <h2 className={style.title}>{product && product.attributes.title}</h2>
        <div className={style.rating}>
          <img src={stars} alt="stars" />
          <h5 className={style.comments}>3.5</h5>
          <img src={message} alt="comment" />
        </div>

        <h5 className={style.size_guide}>
          <span className={style.dark_text}>Select Size</span>
          <a href="#">Size Guide</a>
        </h5>

        <div className={style.sizes}>
          {product &&
            product.attributes.size.map((size: string) => (
              <button
                key={size}
                className={clsx(style.size_button, {
                  [style.selected_button]: size === selectedSize,
                })}
                onClick={() => handleSizeSelect(size)}
              >
                {size}
              </button>
            ))}
        </div>

        <div className={style.buttons}>
          <IconButtonWithText
            onClick={handleAddToCart}
            text="Add to cart"
            icon={cart}
            buttonColor="purple"
          />
          <TextButton
            text={`$${product && product.attributes.price}`}
            buttonColor="white"
          />
        </div>

        <div className={style.features}>
          <Feature icon={cc} text="Secure payment" />
          <Feature icon={fit} text="Size & Fit" />
          <Feature icon={shipping} text="Free shipping" />
          <Feature icon={returns} text="Free returns" />
        </div>
        <ToastContainer />
      </div>
    </>
  );
};
