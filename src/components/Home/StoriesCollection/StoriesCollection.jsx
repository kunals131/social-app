import { UserPlaceholderURL } from '@/utils/assets';
import React from 'react';
import styles from './StoriesCollection.module.css';

const StoryElement = ({ seen, firstName, profileImage }) => {
  return (
    <div className={styles.storyElement}>
      <div
        className={`${
          !seen
            ? styles.storyElement_container_active
            : styles.storyElement_container_inactive
        } ${styles.storyElement_container}}`}
      >
        <div
          style={{
            background: `url(${profileImage}) center center/cover`,
          }}
          className={styles.storyElement_container_image}
        ></div>
      </div>
      <div
        style={{ color: !seen ? '#fcfcfc' : '#c4c4c4' }}
        className={styles.storyElement_name}
      >
        {firstName}
      </div>
    </div>
  );
};

const StoriesCollection = () => {
  return (
    <div className={styles.storiesCollection}>
      <div className={styles.storiesCollection_container}>
        <StoryElement />
        <StoryElement seen />
        <StoryElement seen />
        <StoryElement seen />
        <StoryElement seen />
        <StoryElement seen />
      </div>
    </div>
  );
};

export default StoriesCollection;
