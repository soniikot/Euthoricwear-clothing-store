import style from './styles.module.scss';
import { FC } from 'react';
import { useAppSelector } from '@/app/hooks';
import { selectProducts } from '@/features/products/productsSlice';
import { EmptyList } from '../EmptyList/EmptyList';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { addItem, removeItem } from '@/features/faves/favesSlice';
import { useAppDispatch } from '@/app/hooks';
import heart from '@/assets/heart.svg';
import heartWhite from '@/assets/heart-white.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProductData } from '@/types/interfaces';
import { RootState } from '@/app/store';

export interface ProductsTypeProps {
  numberOfProducts: number;
  isProductPage?: boolean;
  products?: ProductData[];
}

export const Products: FC<ProductsTypeProps> = ({
  numberOfProducts,
  isProductPage,
}) => {
  const products = useAppSelector(selectProducts);
  const { faves } = useAppSelector((state: RootState) => state.faves);
  const dispatch = useAppDispatch();

  const handleToggleFavorite = (product: any) => {
    const favoriteProduct = {
      id: product.id,
      title: product.attributes.title,
      price: product.attributes.price,
      img: product.attributes.img.data.attributes.url,
      color: product.attributes.color,
      subtitle: product.attributes.disc,
    };

    const isFavorite = faves.some((item) => item.id === product.id);

    if (isFavorite) {
      dispatch(removeItem(product.id));
      toast.info('Product removed from favorites!');
    } else {
      dispatch(addItem(favoriteProduct));
      toast.success('Product added to favorites!');
    }
  };

  return (
    <>
      {products.length === 0 ? (
        <EmptyList text={'Sorry. Nothing found'} />
      ) : (
        <div className="container">
          <div
            className={clsx(style.wrapper, {
              [style.product_page_wrapper]: isProductPage,
            })}
          >
            {products.slice(0, numberOfProducts).map((product) => (
              <Link to={`/product/${product.id}`} key={product.id}>
                <div
                  key={product.id}
                  className={style.card}
                  data-testid="product-card"
                >
                  <button
                    className={clsx(style.favorites_button, {
                      [style.active]: faves.some(
                        (item) => item.id === product.id
                      ),
                    })}
                    onClick={(e) => {
                      e.preventDefault();
                      handleToggleFavorite(product);
                    }}
                  >
                    <img
                      src={
                        faves.some((item) => item.id === product.id)
                          ? heartWhite
                          : heart
                      }
                      alt="add to favorites"
                    />
                  </button>
                  <img
                    className={clsx(style.img, {
                      [style.product_page_img]: isProductPage,
                    })}
                    src={
                      import.meta.env.VITE_API_UPLOAD_URL +
                      product.attributes.img.data.attributes.url
                    }
                    alt={product.attributes.title}
                  />

                  <div className={style.text_wrapper}>
                    <p
                      className={clsx(style.title, {
                        [style.product_page_title]: isProductPage,
                      })}
                    >
                      {product.attributes.title}
                    </p>
                    <p
                      className={clsx(style.subtitle, {
                        [style.product_page_subtitle]: isProductPage,
                      })}
                    >
                      {product.attributes.disc}
                    </p>
                    <div
                      className={clsx(style.price, {
                        [style.product_page_price]: isProductPage,
                      })}
                    >
                      ${product.attributes.price}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
      <ToastContainer />
    </>
  );
};
