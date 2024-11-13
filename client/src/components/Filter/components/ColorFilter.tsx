import style from './styles.module.scss';
import { COLORS } from '@/shared/constants/constants';
import { FC } from 'react';
import { useAppDispatch } from '@/app/hooks';
import { setColor } from '@/features/filter/filterSlice';
import { Collapse, useTheme } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { useState } from 'react';
import linkArrowUp from '@/assets/arrow-up.svg';
import linkArrowDown from '@/assets/arrow-Down.svg';
import { useAppSelector } from '@/app/hooks';
import { RootState } from '@/app/store';
import clsx from 'clsx';
export const ColorFilter: FC = () => {
  const dispatch = useAppDispatch();

  const [openColors, setOpenColors] = useState(true);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const selectedColor = useAppSelector(
    (state: RootState) => state.filter.color
  );

  const handleColorChange = (color: string) => {
    dispatch(setColor(color));
  };
  return (
    <>
      <div className={style.header} onClick={() => setOpenColors(!openColors)}>
        <h4>Colors</h4>
        <img
          src={openColors ? linkArrowUp : linkArrowDown}
          alt="toggle arrow"
        />
      </div>
      <Collapse
        in={openColors}
        style={
          isSmallScreen
            ? { position: 'absolute', zIndex: 10, backgroundColor: 'white' }
            : {}
        }
      >
        <div className={style.wrapper}>
          {COLORS.map((color) => (
            <div className={style.card}>
              <div
                key={color.id}
                className={clsx(style.color, {
                  [style.colorActive]: selectedColor === color.title,
                })}
                style={{ backgroundColor: color.color }}
                onClick={() => handleColorChange(color.title)}
              ></div>
              <span>{color.title}</span>
            </div>
          ))}
        </div>
      </Collapse>
    </>
  );
};
