import { ColorFilter } from './components/ColorFilter';
import { Sizes } from './components/Sizes/Sizes';
import { FC } from 'react';
import { useAppDispatch } from '@/app/hooks';
import { resetFilter } from '@/features/filter/filterSlice';
import style from './styles.module.scss';
import filterIcon from '@assets/filter.svg';
import { CategoryCollapse } from './components/CategoryCollapse/CategoryCollapse';
import { PriceCollapse } from './components/PriceCollapse/PriceCollapse';
import { TextButton } from '@/shared/components/TextButton/TextButton';
import { useState } from 'react';
import clsx from 'clsx';

export const Filter: FC = () => {
  const dispatch = useAppDispatch();
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const handleResetFilter = () => {
    dispatch(resetFilter());
  };

  const toggleFilterVisibility = () => {
    setIsFilterVisible((prevState) => !prevState);
  };

  return (
    <>
      <div className={style.mobileFilter}>
        <TextButton
          text={isFilterVisible ? 'Hide Filters' : 'Show Filters'}
          buttonColor="purple"
          onClick={toggleFilterVisibility}
        />
        <TextButton
          onClick={handleResetFilter}
          text="Reset All Filters"
          buttonColor="white"
        />
      </div>
      <div
        className={clsx(style.filterWrapper, {
          [style.visible]: isFilterVisible,
          [style.hidden]: !isFilterVisible,
        })}
      >
        <aside className={style.wrapper}>
          <div className={style.hide_on_mobile}>
            <div className={style.filter_header}>
              <div className={style.header}>
                <p>Filter</p>
                <img
                  className={style.filterImage}
                  src={filterIcon}
                  alt="filter"
                />
              </div>
              <div className={style.reset}>
                <TextButton
                  onClick={handleResetFilter}
                  text="Reset All Filters"
                  buttonColor="white"
                />
              </div>
            </div>
          </div>
          <div>
            <CategoryCollapse />
          </div>
          <PriceCollapse />
          <div>
            <ColorFilter />
          </div>
          <div>
            <Sizes />
          </div>
        </aside>
      </div>
    </>
  );
};
