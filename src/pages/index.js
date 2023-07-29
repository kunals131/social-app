import { BaseLayout } from '@/components/common';
import React from 'react';
import styles from '@/styles/Home.module.css';
import { MyProfileCard } from '@/components/Home';
import StoriesCollection from '@/components/Home/StoriesCollection/StoriesCollection';

import ExploreFeed from '@/components/Home/ExploreFeed/ExploreFeed';
import PostsContainer from '@/components/Home/PostsContainer/PostsContainer';
import UsersSuggestion from '@/components/Home/UsersSuggestion/UsersSuggestion';
import Activity from '@/components/Home/Activity/Activity';

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
          <Activity/>
          <UsersSuggestion/>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Home;
