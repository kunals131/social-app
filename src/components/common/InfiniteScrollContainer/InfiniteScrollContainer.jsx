import React, { useEffect, useRef } from 'react';
import styles from './InfiniteScrollContainer.module.css';
import { useInView } from 'framer-motion';

const InfiniteScrollContainer = ({
  children,
  fetchMore,
  hasMore,
  isFetching,
  isError,
}) => {
  const ref = useRef();
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView && hasMore) {
      fetchMore();
    }
  }, [isInView, fetchMore,hasMore]);

  return (
    <>
      {children}
      <div ref={ref} className={styles.loaderContainer}>
        {!hasMore
          ? 'No More posts to load'
          : isFetching
          ? 'Loading...'
          : isError
          ? 'Error while fetching data'
          : ''}
      </div>
    </>
  );
};

export default InfiniteScrollContainer;
