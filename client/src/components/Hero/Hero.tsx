import style from './styles.module.scss';
import { TextButtonWithLink } from '../../shared/components/TextButtonWithLink/TextButtonWithLink.tsx';
import { FC } from 'react';

export const Hero: FC = () => {
  return (
    <div className={style.background}>
      <div className="container">
        <div className={style.wrapper}>
          <div className={style.text}>
            <h3>T-Shirts / Tops</h3>
            <h1 className={style.title}>Summer Value Pack</h1>
            <h3>cool / colorful / comfy</h3>
            <div className={style.button}>
              <TextButtonWithLink
                text="Shop Now"
                buttonColor="white"
                link="/products/"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
