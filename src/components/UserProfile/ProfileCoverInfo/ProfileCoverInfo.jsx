import React from 'react';
import styles from './ProfileCoverIinfo.module.css';
import UserStats from '../UserStats/UserStats';
import { CoverPlaceholderURL } from '@/utils/assets';
const ProfileCoverInfo = () => {
  return (
    <div className={styles.profileCover}>
      <div className={styles.profileCover_user}>
        <div className={styles.profileCover_user_img}></div>
        <div className={styles.profileCover_user_info}>
          <div className={styles.profileCover_user_info_name}>
            Kunal Sangtiani
          </div>
          <div className={styles.profileCover_user_info_username}>
            @kunals131
          </div>
        </div>
      </div>
      <div className={styles.profileCover_stats_container}>
        <div
          style={{
            background: `url(${CoverPlaceholderURL}) center center/cover`,
          }}
          className={styles.profileCover_coverImg}
        ></div>
        <div className={styles.profileCover_stats_container_inner}>
          <UserStats value={200} label="Followers" />
          <UserStats value={120} label="Following" />
          <UserStats value={201} label="Posts" />
          <UserStats value={120} label="Photos" />
        </div>
      </div>
    </div>
  );
};

export default ProfileCoverInfo;
