import React from 'react';
import styles from './PostsContianer.module.css';
import Post from '../Post/Post';

const PostsContainer = ({ photos }) => {
  console.log(photos);
  return (
    <div className={styles.posts}>
      {photos?.pages?.map((items) => {
        return items.map((item) => {
          return (
            <Post
              alt_description={item.alt_description}
              createdAt={item.created_at}
              description={item.description}
              id={item.id}
              key={item.id}
              location={item.location}
              user={item.user}
              likes={item.likes}
              isLiked={item.liked_by_user}
              blurHash={item.blur_hash}
              urls={item.urls}
            />
          );
        });
      })}
    </div>
  );
};

export default PostsContainer;
