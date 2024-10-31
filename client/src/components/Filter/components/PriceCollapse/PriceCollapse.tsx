import { Collapse, useTheme } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { useState } from 'react';
import { FC } from 'react';
import { Button } from '@mui/material';
import style from './styles.module.scss';
import { useAppDispatch } from '@/app/hooks';
import { useAppSelector } from '@/app/hooks';
import { RootState } from '@/app/store';
import { setPriceRange } from '@/features/filter/filterSlice';
import { Slider } from '@mui/material';

export const PriceCollapse: FC = () => {
  const priceRange = useAppSelector((state: RootState) => state.filter.price);
  const dispatch = useAppDispatch();

  const [openPrice, setOpenPrice] = useState(false);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handlePriceChanges = (newValue: number[] | number) => {
    if (!Array.isArray(newValue)) {
      throw new Error('Price range is not a number array');
    }

    dispatch(setPriceRange(newValue));
  };

  return (
    <>
      <Button className={style.header} onClick={() => setOpenPrice(!openPrice)}>
        Price
      </Button>
      <Collapse
        in={openPrice}
        style={
          isSmallScreen
            ? { position: 'absolute', zIndex: 10, backgroundColor: 'white' }
            : {}
        }
      >
        <div className={style.slider}>
          <div style={{ width: '225px', padding: '5px' }}>
            <Slider
              value={priceRange}
              onChange={(_event, value) => handlePriceChanges(value)}
              color="secondary"
              min={0}
              max={200}
            />
            <div className={style.range}>
              <button className={style.button}>{priceRange[0]}</button>
              <button className={style.button}>{priceRange[1]}</button>
            </div>
          </div>
        </div>
      </Collapse>
    </>
  );
};
