import { BaseLayout } from '@/components/common';
import React from 'react';
import styles from '@/styles/Home.module.css';
import { MyProfileCard } from '@/components/Home';
import StoriesCollection from '@/components/Home/StoriesCollection/StoriesCollection';
import Post from '@/components/Home/Post/Post';
import ExploreFeed from '@/components/Home/ExploreFeed/ExploreFeed';

const Home = () => {
  return (
    <BaseLayout>
      <div className={styles.home}>
        <div className={styles.home_left}>
          <MyProfileCard />
          <ExploreFeed/>
        </div>
        <div className={styles.home_center}>
          <StoriesCollection />
          <div className="mt-4">
            <Post />
          </div>
        </div>
        <div className={styles.home_right}></div>
      </div>
    </BaseLayout>
  );
};

export default Home;
