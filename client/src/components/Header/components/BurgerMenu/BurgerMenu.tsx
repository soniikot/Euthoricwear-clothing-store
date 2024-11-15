import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setGender } from '@/features/filter/filterSlice';
import { type MouseEvent } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

export function BurgerMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleGenderChange = (gender: string) => {
    navigate('/products/');
    dispatch(setGender(gender));
  };

  return (
    <div>
      <Button
        size="large"
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon
          sx={{
            color: 'rgba(138, 51, 253, 1)',
            '&:hover': {
              backgroundColor: 'rgba(128, 0, 128, 0.1)',
            },
          }}
        />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{
          '& .MuiPaper-root': {
            marginLeft: '-15px', // Move the menu 10px to the left
          },
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/products">Shop</Link>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleGenderChange('men');
            handleClose();
          }}
        >
          <li>Men</li>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleGenderChange('women');
            handleClose();
          }}
        >
          <li>Women</li>
        </MenuItem>
      </Menu>
    </div>
  );
}
