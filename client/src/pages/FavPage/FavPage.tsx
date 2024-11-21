import { EmptyList } from '@/components/EmptyList/EmptyList';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { RootState } from '@/app/store';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import style from './styles.module.scss';
import heart from '@/assets/heart.svg';
import heartWhite from '@/assets/heart-white.svg';
import { removeItem } from '@/features/faves/favesSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const FavPage: FC = () => {
  const { faves } = useAppSelector((state: RootState) => state.faves);
  const dispatch = useAppDispatch();

  const handleToggleFavorite = (product: any) => {
    const isFavorite = faves.some((item) => item.id === product.id);

    if (isFavorite) {
      dispatch(removeItem(product.id));
      toast.info('Product removed from favorites!');
    } else {
    }
  };
  return (
    <div className="container">
      {faves.length === 0 ? (
        <EmptyList text="You haven't added anything to favorites yet" />
      ) : (
        <div className="container">
          <div className={clsx(style.wrapper)}>
            {faves.map((product) => (
              <>
                <Link to={`/product/${product.id - 1}`} key={product.id}>
                  <div key={product.id} className={style.card}>
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
                      className={clsx(style.img)}
                      src={import.meta.env.VITE_API_UPLOAD_URL + product.img}
                      alt={product.title}
                    />
                    <div className={style.text_wrapper}>
                      <p className={clsx(style.title)}>{product.title}</p>
                      <p className={clsx(style.subtitle)}>{product.subtitle}</p>
                      <div className={clsx(style.price)}>${product.price}</div>
                    </div>
                  </div>
                </Link>
              </>
            ))}
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};
