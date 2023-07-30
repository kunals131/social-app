import React from 'react';
import styles from './Header.module.css';
import Image from 'next/image';
import { LogoWEBP } from '@/utils/assets';
import Navigation from '../Navigation/Navigation';


import Link from 'next/link';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
const Header = () => {
  return (
    <div className={`${styles.header} header-primary`}>
      <div className={styles.header_left}>
        <div className={styles.header_left_logo}>
          <Link href={'/'}>
          <Image
            alt="logo"
            src={LogoWEBP}
            className={styles.header_left_logo_img}
          />
          </Link>
        </div>
        <div className={styles.header_left_search}>
          <input className="" placeholder="#Explore" />
        </div>
        <div className={styles.header_left_logoText}>Social</div>
      </div>
      <div className={styles.header_center}>
        <Navigation />
      </div>
      <div className={styles.header_right}>
        <DarkModeToggle/>
      </div>
    </div>
  );
};

export default Header;
