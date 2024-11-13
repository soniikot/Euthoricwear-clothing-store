import { Collapse, useTheme } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { useState } from 'react';
import { FC } from 'react';
import { Button } from '@mui/material';
import style from './styles.module.scss';
import { CATEGORIES } from '../../constants';
import clsx from 'clsx';
import { useAppDispatch } from '@/app/hooks';
import { useAppSelector } from '@/app/hooks';
import { RootState } from '@/app/store';
import { setCategory } from '@/features/filter/filterSlice';
import linkArrow from '@/assets/link-arrow.svg';
import linkArrowUp from '@/assets/arrow-up.svg';
import linkArrowDown from '@/assets/arrow-Down.svg';

export const CategoryCollapse: FC = () => {
  const [openCategory, setOpenCategory] = useState(true);
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleCategoryChange = (category: string) => {
    dispatch(setCategory(category));
  };

  const filteredCategory = useAppSelector(
    (state: RootState) => state.filter.category
  );
  return (
    <>
      <div
        className={style.header}
        onClick={() => setOpenCategory(!openCategory)}
      >
        <h4>Categories</h4>
        <img
          src={openCategory ? linkArrowUp : linkArrowDown}
          alt="toggle arrow"
        />
      </div>
      <Collapse
        in={openCategory}
        style={
          isSmallScreen
            ? { position: 'absolute', zIndex: 10, backgroundColor: 'white' }
            : {}
        }
      >
        <div className={style.categories}>
          <ul className={style.subcategory_wrapper}>
            {CATEGORIES.map((subcategory: string) => (
              <li
                key={subcategory}
                onClick={() => handleCategoryChange(subcategory)}
                className={clsx(style.subcategory, {
                  [style.active]: filteredCategory === subcategory,
                })}
              >
                {subcategory}
                <img src={linkArrow} alt="link" />
              </li>
            ))}
          </ul>
        </div>
      </Collapse>
    </>
  );
};
