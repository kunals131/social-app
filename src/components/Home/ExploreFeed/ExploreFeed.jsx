import React, { useMemo } from 'react';
import styles from './ExploreFeed.module.css';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';



const ExploreFeed = ({collections}) => {
  const Images = useMemo(()=>{
    if (collections.pages?.at(0)) {
      return collections.pages.at(0).map((collection) => {
        return collection.cover_photo.urls.regular;
      })?.slice(0,8);
    }
    return [];
  }, [collections]);

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
            {Images.map((project, index) => (
              <div key={index} style={{ width: '100%' }}>
                <picture>
                <img
                  src={project}
                  alt={`Image ${index}`}
                  style={{
                    borderRadius: '1rem',
                    width: '100%',
                    display: 'block',
                  }}
                  className={styles.exploreFeed_gallary_image}
                />
                </picture>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default ExploreFeed;
