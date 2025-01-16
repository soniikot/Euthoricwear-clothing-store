import style from './styles.module.scss';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import facebook from '@/assets/facebook.svg';
import twitter from '@/assets/twitter.svg';
import instagram from '@/assets/instagram.svg';
import link from '@/assets/link.svg';

export const Footer: FC = () => {
  return (
    <div className={style.background}>
      <div className="container">
        <div className={style.wrapper}>
          <ul>
            <li>
              <span className={style.bold}>Need Help</span>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/sofia-kotova-1b7757230/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Us
              </a>
            </li>
            <li>
              <Link to="/about">Track Order</Link>
            </li>
            <li>
              <Link to="/about">Return & Refunds</Link>
            </li>
            <li>
              <Link to="/about">FAQ's</Link>
            </li>
          </ul>

          <ul>
            <li>
              <span className={style.bold}>Company</span>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/sofia-kotova-1b7757230/"
                target="_blank"
                rel="noopener noreferrer"
              >
                About Us
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/sofia-kotova-1b7757230/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Euphoria Blog
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/sofia-kotova-1b7757230/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Collaboration
              </a>
            </li>
            <li>
              <a
                href="https://github.com/soniikot"
                target="_blank"
                rel="noopener noreferrer"
              >
                Media
              </a>
            </li>
          </ul>

          <ul>
            <li>
              <span className={style.bold}>More Info</span>
            </li>
            <li>
              <Link to="/about">Terms and Conditions</Link>
            </li>
            <li>
              <Link to="/about">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/about">Shopping Policy</Link>
            </li>
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
          <a
            href="https://www.facebook.com/sophia.kotova/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={style.icons} src={facebook} alt="social media" />
          </a>
          <a
            href="https://www.instagram.com/soniikot/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={style.icons} src={instagram} alt="social media" />
          </a>

          <a
            href=" https://x.com/kotiison"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={style.icons} src={twitter} alt="social media" />
          </a>

          <a
            href="https://www.linkedin.com/in/sofia-kotova-1b7757230/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={style.icons} src={link} alt="social media" />
          </a>
        </div>

        <p className={style.text}>
          Copyright © 2024 Euphoria Folks Pvt Ltd. All rights reserved.
        </p>
      </div>
    </div>
  );
};
