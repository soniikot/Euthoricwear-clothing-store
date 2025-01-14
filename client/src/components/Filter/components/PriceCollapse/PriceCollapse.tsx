import { Collapse, useTheme } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { useState } from 'react';
import { FC, ChangeEvent } from 'react';
import style from './styles.module.scss';
import { useAppDispatch } from '@/app/hooks';
import { useAppSelector } from '@/app/hooks';
import { RootState } from '@/app/store';
import { setPriceRange } from '@/features/filter/filterSlice';
import linkArrowUp from '@/assets/arrow-up.svg';
import linkArrowDown from '@/assets/arrow-down.svg';
import { Slider } from '@mui/material';

export const PriceCollapse: FC = () => {
  const priceRange = useAppSelector((state: RootState) => state.filter.price);
  const dispatch = useAppDispatch();

  const [openPrice, setOpenPrice] = useState(true);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handlePriceChanges = (newValue: number[] | number) => {
    if (!Array.isArray(newValue)) {
      throw new Error('Price range is not a number array');
    }

    dispatch(setPriceRange(newValue));
  };

  const handleInputChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    let newValue = [...priceRange];

    const inputValue =
      event.target.value === '' ? 0 : Number(event.target.value);

    newValue[index] = inputValue;

    if (newValue[0] <= newValue[1]) {
      dispatch(setPriceRange(newValue));
    }
  };

  return (
    <>
      <div className={style.header} onClick={() => setOpenPrice(!openPrice)}>
        <h4>Price</h4>
        <img src={openPrice ? linkArrowUp : linkArrowDown} alt="toggle arrow" />
      </div>
      <Collapse
        in={openPrice}
        style={isSmallScreen ? { backgroundColor: 'white' } : {}}
      >
        <div className={style.slider}>
          <div
            data-testid="price-slider"
            style={{ width: '225px', padding: '5px' }}
          >
            <Slider
              value={priceRange}
              onChange={(_event, value) => handlePriceChanges(value)}
              color="secondary"
              min={0}
              max={200}
            />
            <div className={style.range}>
              <input
                className={style.button}
                type="number"
                value={priceRange[0]}
                onChange={(event) => handleInputChange(0, event)}
                min={0}
                max={priceRange[1]}
              />
              <input
                className={style.button}
                type="number"
                value={priceRange[1]}
                onChange={(event) => handleInputChange(1, event)}
                min={priceRange[0]}
                max={200}
              />
            </div>
          </div>
        </div>
      </Collapse>
    </>
  );
};
