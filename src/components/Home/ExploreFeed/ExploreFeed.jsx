import React from 'react';
import styles from './ExploreFeed.module.css';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

let Images = [
  'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  ,
  'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  ,
  // 'https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
  'https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80',
  'https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  'https://images.unsplash.com/photo-1615529182904-14819c35db37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
  // 'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
];

const ExploreFeed = () => {
  return (
    <div className={styles.exploreFeed}>
      <div className={styles.exploreFeed_header}>
        <div className={styles.exploreFeed_header_title}>Explore</div>
        <div className={styles.exploreFeed_header_actionURL}>See all</div>
      </div>
      <div className={styles.exploreFeed_gallary}>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 1700: 3, 1400: 2, 450: 1, 4000: 4 }}
        >
          <Masonry gutter="12px">
            {Images.map((project, i) => (
              <div style={{ width: '100%' }}>
                <img
                  src={project}
                  className="rounded-xl"
                  style={{ width: '100%', display: 'block' }}
                />
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default ExploreFeed;
