import { BaseLayout } from '@/components/common';
import React from 'react';
import styles from '@/styles/Home.module.css';
import { MyProfileCard } from '@/components/Home';
const Home = () => {
  return (
    <BaseLayout>
      <div className={styles.home}>
        <div className={styles.home_left}><MyProfileCard/></div>
        <div className={styles.home_center}></div>
        <div className={styles.home_right}></div>
      </div>
    </BaseLayout>
  );
};

export default Home;
