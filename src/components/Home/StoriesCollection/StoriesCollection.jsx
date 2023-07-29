import React, { useEffect, useRef, useState } from 'react';
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
        style={{ color: !seen ? '#fcfcfc' : '#c4c4c4' }}
        className={styles.storyElement_name}
      >
        {firstName}
      </div>
    </div>
  );
};

const StoriesCollection = ({topics}) => {
  const ref = useRef();
  const [scrollContainerWidth, setScrollContainerWidth] = useState(0);
  const { isMounted } = useIsMounted();
  useEffect(() => {
    if (isMounted) {
      setScrollContainerWidth(ref.current.offsetWidth);
    }
  }, [isMounted]);
  console.log(topics, 'Topics')

  return (
    <div
      style={{ maxWidth: scrollContainerWidth ? scrollContainerWidth : '100%' }}
      ref={ref}
      className={`${styles.storiesCollection}`}
    >
      <div className={`${styles.storiesCollection_container} no-scrollbar-horizontal`}>
        {scrollContainerWidth && (
          <>
          {topics.pages.map(topicPage=>{
            return topicPage.map(topic=>{
              return (
                <StoryElement key={topic.id} firstName={topic.title} profileImage={topic.cover_photo.urls.regular}/>
              )
            })
          })}
          </>
        )}
      </div>
    </div>
  );
};

export default StoriesCollection;
