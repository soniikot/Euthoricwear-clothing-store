import style from './styles.module.scss';
import { COLORS } from '@/shared/constants/constants';
import { FC } from 'react';
import { useAppDispatch } from '@/app/hooks';
import { setColor } from '@/features/filter/filterSlice';
import { Collapse, useTheme } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { useState } from 'react';
import { Button } from '@mui/material';

export const ColorFilter: FC = () => {
  const dispatch = useAppDispatch();

  const [openColors, setOpenColors] = useState(false);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleColorChange = (color: string) => {
    dispatch(setColor(color));
  };
  return (
    <>
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
        <div className={style.wrapper}>
          {COLORS.map((color) => (
            <div className={style.card}>
              <div
                key={color.id}
                className={style.color}
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
