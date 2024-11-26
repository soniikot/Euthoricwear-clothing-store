import { useState, useEffect, FC } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import style from './styles.module.scss';
import { useAppDispatch } from '@/app/hooks';
import { setGender, resetFilter } from '@/features/filter/filterSlice';

export const Menu: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [activeGender, setActiveGender] = useState<string>('');

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const genderFromURL = queryParams.get('gender') || '';

    if (genderFromURL) {
      setActiveGender(genderFromURL);
      dispatch(setGender(genderFromURL));
    } else if (location.pathname !== '/products/') {
      setActiveGender('');
    }
  }, [location.pathname, location.search, dispatch]);

  const handleGenderChange = (gender: string) => {
    navigate(`/products/?gender=${gender}`);
    dispatch(setGender(gender));
    setActiveGender(gender);
  };

  const handleShopAllClick = () => {
    dispatch(resetFilter());
    setActiveGender('');
    navigate('/products/');
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <ul className={style.header_menu}>
      <li
        className={`${style.link} ${isActive('/products/') && activeGender === '' ? style.active : ''}`}
      >
        <Link to={'/products/'} onClick={handleShopAllClick}>
          Shop All
        </Link>
      </li>
      <li
        className={`${style.link} ${isActive('/products/') && activeGender === 'men' ? style.active : ''}`}
        onClick={() => handleGenderChange('men')}
      >
        Men
      </li>
      <li
        className={`${style.link} ${isActive('/products/') && activeGender === 'women' ? style.active : ''}`}
        onClick={() => handleGenderChange('women')}
      >
        Women
      </li>
    </ul>
  );
};
