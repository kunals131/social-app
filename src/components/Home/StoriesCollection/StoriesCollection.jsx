import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from './StoriesCollection.module.css';

import useIsMounted from '@/hooks/utils/useIsMounted';

const StoryElement = ({ seen, firstName, profileImage }) => {
  return (
    <div className={styles.storyElement}>
      <div
        style={{ backgroundColor: seen ? '#404040' : '#4858d1' }}
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
        style={{ color: !seen ? 'var(--primary-text-color)' : '#c4c4c4' }}
        className={styles.storyElement_name}
      >
        {firstName}
      </div>
    </div>
  );
};

const StoriesCollection = ({ topics }) => {
  const ref = useRef();
  const [scrollContainerWidth, setScrollContainerWidth] = useState(0);
  const { isMounted } = useIsMounted();
  const handleMaxContainerWidth = useCallback(()=>{
    setScrollContainerWidth(ref.current.offsetWidth);
  }, []);
  useEffect(() => {
    if (isMounted) {
      handleMaxContainerWidth();
      window.addEventListener('resize',handleMaxContainerWidth)
      return ()=>window.removeEventListener('resize', handleMaxContainerWidth)
    }
  }, [isMounted,handleMaxContainerWidth]);


  return (
    <div
      style={{ maxWidth: scrollContainerWidth ? scrollContainerWidth : '100%' }}
      ref={ref}
      className={`${styles.storiesCollection}`}
    >
      <div
        className={`${styles.storiesCollection_container} no-scrollbar-horizontal`}
      >
        {scrollContainerWidth && (
          <>
            {topics.pages.map((topicPage) => {
              return topicPage.map((topic) => {
                return (
                  <StoryElement
                    key={topic.id}
                    firstName={topic.title}
                    profileImage={topic.cover_photo.urls.regular}
                  />
                );
              });
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default StoriesCollection;
