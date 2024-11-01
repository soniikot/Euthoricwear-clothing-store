import { ColorFilter } from './components/ColorFilter';
import { Sizes } from './components/Sizes/Sizes';
import { FC } from 'react';
import { useAppDispatch } from '@/app/hooks';
import { resetFilter } from '@/features/filter/filterSlice';
import style from './styles.module.scss';
import filterIcon from '@assets/filter.svg';
import { CategoryCollapse } from './components/CategoryCollapse/CategoryCollapse';
import { PriceCollapse } from './components/PriceCollapse/PriceCollapse';

export const Filter: FC = () => {
  const dispatch = useAppDispatch();

  const handleResetFilter = () => {
    dispatch(resetFilter());
  };

  return (
    <aside className={style.wrapper}>
      <div className={style.filter_header}>
        <div className={style.header}>
          <p>Filter</p>
          <img className={style.filterImage} src={filterIcon} alt="filter" />
        </div>
        <div className={style.reset}>
        <button className={style.button} onClick={handleResetFilter}>
          Reset All Filters
        </button>
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
  );
};
