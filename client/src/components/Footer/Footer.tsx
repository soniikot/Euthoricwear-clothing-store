import style from './styles.module.scss';
import socialMedia from '@/assets/social_media.png';
import { FC } from 'react';
import { Link } from 'react-router-dom';

export const Footer: FC = () => {
  return (
    <div className={style.background}>
      <div className="container">
        <div className={style.wrapper}>
          <ul>
            <li>
              <span className={style.bold}>Need Help</span>
            </li>
            <li>Contact Us</li>
            <li>Track Order</li>
            <li>Return & Refunds</li>
            <li>FAQ's</li>
            <li>Career</li>
          </ul>

          <ul>
            <li>
              <span className={style.bold}>Company</span>
            </li>
            <Link to='/about/'><li>About Us</li></Link>
            <li>Euphoria Blog</li>
            <li>Euphoriastan</li>
            <li>Collaboration</li>
            <li>Media</li>
          </ul>

          <ul>
            <li>
              <span className={style.bold}>More Info</span>
            </li>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Shopping Policy</li>
            <li>Sitemap</li>
          </ul>

          <ul>
            <li>
              <span className={style.bold}>Location</span>
            </li>
            <li>support@euphoria.Company</li>
            <li>345, Union St, San-Francisco</li>
          </ul>
        </div>
        <div className={style.social_media}>
          <img className={style.icons} src={socialMedia} alt="social media" />
          <div className={style.app_container}>
        
          </div>
        </div>

        <h3 className={style.title}>Popular Categories</h3>
        <p className={style.text}>
          Copyright © 2024 Euphoria Folks Pvt Ltd. All rights reserved.
        </p>
      </div>
    </div>
  );
};
