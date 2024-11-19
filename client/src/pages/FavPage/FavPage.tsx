import { EmptyList } from '@/components/EmptyList/EmptyList';
import { useAppSelector } from '@/app/hooks';
import { RootState } from '@/app/store';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import style from './styles.module.scss';

export const FavPage: FC = () => {
  const { products } = useAppSelector((state: RootState) => state.products);
  const { faves } = useAppSelector((state: RootState) => state.faves);

  console.log('Products:', products);
  console.log('Favorite Items:', faves);

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
                    <img
                      className={clsx(style.img)}
                      src={import.meta.env.VITE_API_UPLOAD_URL + product.img}
                      alt={product.title}
                    />
                    <div className={style.text_wrapper}>
                      <p className={clsx(style.title)}>{product.title}</p>
                      <p className={clsx(style.subtitle)}>{product.disc}</p>
                      <div className={clsx(style.price)}>${product.price}</div>
                    </div>
                  </div>
                </Link>
              </>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
