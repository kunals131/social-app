import React from 'react';
import styles from './Header.module.css';
import Image from 'next/image';
import { LogoWEBP } from '@/utils/assets';
import Navigation from '../Navigation/Navigation';
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import ProfileSwitcher from '../ProfileSwitcher/ProfileSwitcher';
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_left}>
        <div className={styles.header_left_logo}>
          <Image src={LogoWEBP} className={styles.header_left_logo_img} />
        </div>
        <div className={styles.header_left_search}>
          <input className="" placeholder="#Explore" />
        </div>
      </div>
      <div className={styles.header_center}>
        <Navigation />
      </div>
      <div className={styles.header_right}>
        <ProfileSwitcher/>
      </div>
    </div>
  );
};

export default Header;
