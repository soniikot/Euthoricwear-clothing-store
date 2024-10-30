import { useState } from 'react';
import {
  Collapse,
  Button,
  Slider,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { ColorFilter } from './components/ColorFilter';
import { Sizes } from './components/Sizes/Sizes';
import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { RootState } from '@/app/store';
import { resetFilter, setPriceRange } from '@/features/filter/filterSlice';
import style from './styles.module.scss';
import filterIcon from '@assets/filter.svg';
import { CategoryCollapse } from './components/CategoryCollapse/CategoryCollapse';

export const Filter: FC = () => {
  const priceRange = useAppSelector((state: RootState) => state.filter.price);
  const theme = useTheme();

  const dispatch = useAppDispatch();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  //const [openCategory, setOpenCategory] = useState(false);
  const [openPrice, setOpenPrice] = useState(false);
  const [openColors, setOpenColors] = useState(false);
  const [openSize, setOpenSize] = useState(false);

  const handleResetFilter = () => {
    dispatch(resetFilter());
  };

  const handlePriceChanges = (newValue: number[] | number) => {
    if (!Array.isArray(newValue)) {
      throw new Error('Price range is not a number array');
    }

    dispatch(setPriceRange(newValue));
  };

  return (
    <aside className={style.wrapper}>
      <div className={style.filter_header}>
        <div className={style.header}>
          <p>Filter</p>
          <img className={style.filterImage} src={filterIcon} alt="filter" />
        </div>
        <button className={style.reset} onClick={handleResetFilter}>
          Reset All Filters
        </button>
      </div>

      <div>
        <CategoryCollapse />
      </div>

      <div>
        <Button
          className={style.header}
          onClick={() => setOpenPrice(!openPrice)}
        >
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
      </div>

      <div>
        <Button
          className={style.header}
          onClick={() => setOpenColors(!openColors)}
        >
          Colors
        </Button>
        <Collapse
          in={openColors}
          style={
            isSmallScreen
              ? { position: 'absolute', zIndex: 10, backgroundColor: 'white' }
              : {}
          }
        >
          <ColorFilter />
        </Collapse>
      </div>

      <div>
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
          <Sizes />
        </Collapse>
      </div>
    </aside>
  );
};
