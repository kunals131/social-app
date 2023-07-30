import React from 'react';
import styles from './Navigation.module.css';
import { LayoutGroup, motion } from 'framer-motion';
import {
  HiBell,
  HiOutlineBell,
  HiHeart,
  HiOutlineHeart,
  HiUser,
  HiOutlineUser,
  HiHome,
  HiOutlineHome,
} from 'react-icons/hi2';
import { useRouter } from 'next/router';
import { currentUserData } from '@/utils/data/static/CurrentUserData';
import Link from 'next/link';
const NavigationIcon = ({ icon, activeIcon, href = '/' }) => {
  const router = useRouter();
  const isActive = href == router.pathname;
  
  return (
    <Link href={href}>
    <div
      className={`${styles.navigation_icon}${
        isActive ? ` ${styles.navigation_icon_active}` : ''
      }`}
    >
      <p className={styles.navigation_icon_svg}>
        {isActive ? activeIcon : icon}
      </p>
      {isActive && (
        <motion.div
          layoutId="move"
          className={styles.navigation_icon_activeIcon}
        ></motion.div>
      )}
    </div>
    </Link>
  );
};

const Navigation = () => {
  return (
    <LayoutGroup id="a">
      <nav className={styles.navigation}>
        <NavigationIcon
          href="/"
          activeIcon={<HiHome />}
          icon={<HiOutlineHome />}
        />
        <NavigationIcon
          activeIcon={<HiBell />}
          icon={<HiOutlineBell strokeWidth={2} />}
          href="/notifications"
        />
        <NavigationIcon
          activeIcon={<HiHeart />}
          icon={<HiOutlineHeart strokeWidth={2} />}
          href="/liked-photos"
        />
        <NavigationIcon
          activeIcon={<HiUser />}
          href={`/user/${currentUserData.username}`}
          icon={<HiOutlineUser strokeWidth={2} />}
        />
      </nav>
    </LayoutGroup>
  );
};

export default Navigation;
