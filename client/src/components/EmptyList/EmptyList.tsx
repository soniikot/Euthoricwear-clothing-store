import { FC } from 'react';
import { TextButtonWithLink } from '@/shared/components/TextButtonWithLink/TextButtonWithLink';
import style from './styles.module.scss';

interface EmptyList {
  text: string;
}

export const EmptyList: FC<EmptyList> = ({ text }) => {
  return (
    <div className={style.wrapper}>
      <h2>{text}</h2>

      <TextButtonWithLink
        text="Continue Shopping"
        buttonColor="purple"
        link="/"
      />
    </div>
  );
};
