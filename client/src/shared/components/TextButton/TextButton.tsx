import style from './styles.module.scss';
import clsx from 'clsx';
import { FC, MouseEvent } from 'react';

export interface TextButtonProps {
  text: string;
  buttonColor: 'purple' | 'white';
  onClick?: (event: MouseEvent) => void;
  type?: string;
}

export const TextButton: FC<TextButtonProps> = ({
  text,
  buttonColor,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(style.button, {
        [style.purple]: buttonColor === 'purple',
        [style.white]: buttonColor === 'white',
      })}
    >
      {text}
    </button>
  );
};
