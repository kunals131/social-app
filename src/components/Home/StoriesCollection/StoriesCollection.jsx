import React from 'react';
import styles from './StoriesCollection.module.css';
import { UserPlaceholderURL } from '@/utils/assets';

const StoryElement = ({ seen, firstName, profileImage }) => {
  return (
    <div className={styles.storyElement}>
      <div
      style={{backgroundColor: seen ? '#404040' : '#4858d1'}}
        className={styles.storyElement_container}
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
        <StoryElement firstName='kunals131' profileImage={UserPlaceholderURL} />
        <StoryElement firstName='kunals131' profileImage={UserPlaceholderURL} seen />
        <StoryElement firstName='kunals131' profileImage={UserPlaceholderURL} seen />
        <StoryElement firstName='kunals131' profileImage={UserPlaceholderURL} seen />
        <StoryElement firstName='kunals131' profileImage={UserPlaceholderURL} seen />
        <StoryElement firstName='kunals131' profileImage={UserPlaceholderURL} seen />
      </div>
    </div>
  );
};

export default StoriesCollection;
