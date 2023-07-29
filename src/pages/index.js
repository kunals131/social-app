import { BaseLayout } from '@/components/common';
import React from 'react';
import styles from '@/styles/Home.module.css';
import {
  Activity,
  ExploreFeed,
  MyProfileCard,
  PostsContainer,
  StoriesCollection,
  UsersSuggestion,
} from '@/components/Home';

const Home = () => {
  return (
    <BaseLayout>
      <div className={styles.home}>
        <div className={styles.home_left}>
          <MyProfileCard />
          <ExploreFeed />
        </div>
        <div className={styles.home_center}>
          <StoriesCollection />
          <PostsContainer />
        </div>
        <div className={styles.home_right}>
          <Activity />
          <UsersSuggestion />
        </div>
      </div>
    </BaseLayout>
  );
};

export default Home;
