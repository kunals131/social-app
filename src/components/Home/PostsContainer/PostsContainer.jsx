import React from 'react';
import styles from './PostsContianer.module.css';
import Post from '../Post/Post';

const PostsContainer = () => {
  return (
    <div className={styles.posts}>
      <Post />
    </div>
  );
};

export default PostsContainer;
