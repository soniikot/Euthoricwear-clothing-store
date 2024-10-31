import style from './styles.module.scss';
import { FC } from 'react';
import { useAppDispatch } from '@/app/hooks';
import { useAppSelector } from '@/app/hooks';
import { RootState } from '@/app/store';
import { setSizes } from '@/features/filter/filterSlice';
import clsx from 'clsx';
import { Collapse, useTheme } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { useState } from 'react';
import { Button } from '@mui/material';

export const Sizes: FC = () => {
  const dispatch = useAppDispatch();
  const [openSize, setOpenSize] = useState(false);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const selectedSize = useAppSelector((state: RootState) => state.filter.size);

  const handleSizeChange = (size: string) => {
    dispatch(setSizes(size));
  };

  return (
    <>
      <Button className={style.header} onClick={() => setOpenSize(!openSize)}>
        Size
      </Button>
      <Collapse
        in={openSize}
        style={
          isSmallScreen
            ? { position: 'absolute', zIndex: 10, backgroundColor: 'white' }
            : {}
        }
      >
        <div className={style.wrapper}>
          <button
            className={clsx(style.button, {
              [style.buttonActive]: selectedSize === 'XXS',
            })}
            onClick={() => handleSizeChange('XXS')}
          >
            XXS
          </button>
          <button
            className={clsx(style.button, {
              [style.buttonActive]: selectedSize === 'XS',
            })}
            onClick={() => handleSizeChange('XS')}
          >
            XS
          </button>
          <button
            className={clsx(style.button, {
              [style.buttonActive]: selectedSize === 'S',
            })}
            onClick={() => handleSizeChange('S')}
          >
            S
          </button>
          <button
            className={clsx(style.button, {
              [style.buttonActive]: selectedSize === 'M',
            })}
            onClick={() => handleSizeChange('M')}
          >
            M
          </button>
          <button
            className={clsx(style.button, {
              [style.buttonActive]: selectedSize === 'L',
            })}
            onClick={() => handleSizeChange('L')}
          >
            L
          </button>
          <button
            className={clsx(style.button, {
              [style.buttonActive]: selectedSize === 'XL',
            })}
            onClick={() => handleSizeChange('XL')}
          >
            XL
          </button>
          <button
            className={clsx(style.button, {
              [style.buttonActive]: selectedSize === 'XXL',
            })}
            onClick={() => handleSizeChange('XXL')}
          >
            XXL
          </button>
          <button
            className={clsx(style.button, {
              [style.buttonActive]: selectedSize === '3XL',
            })}
            onClick={() => handleSizeChange('3XL')}
          >
            3XL
          </button>
          <button
            className={clsx(style.button, {
              [style.buttonActive]: selectedSize === '4XL',
            })}
            onClick={() => handleSizeChange('4XL')}
          >
            4XL
          </button>
        </div>
      </Collapse>
    </>
  );
};
