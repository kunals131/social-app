import React from 'react';
import styles from './ProfileCoverIinfo.module.css';
import UserStats from '../UserStats/UserStats';
import { CoverPlaceholderURL } from '@/utils/assets';
import Image from 'next/image';
const ProfileCoverInfo = ({ user }) => {

  return (
    <div className={styles.profileCover}>
      <div className={styles.profileCover_user}>
        <div className={styles.profileCover_user_img_container}>
          <Image
            src={user.profile_image.large}
            fill
            alt={`user-profile-${user.username}`}
            className={styles.profileCover_user_img}
          />
        </div>
        <div className={styles.profileCover_user_info}>
          <div className={styles.profileCover_user_info_name}>{user.name}</div>
          <div className={styles.profileCover_user_info_username}>
            @{user.username}
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
          <UserStats value={user.followers_count} label="Followers" />
          <UserStats value={user.following_count} label="Following" />
          <UserStats value={user.total_photos} label="Posts" />
          <UserStats value={user.total_likes} label="Likes" />
        </div>
      </div>
    </div>
  );
};

export default ProfileCoverInfo;
