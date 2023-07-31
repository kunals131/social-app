import React from 'react';
import styles from './MyProfileCard.module.css';
import { HiEllipsisVertical } from 'react-icons/hi2';
import { CoverPlaceholderURL } from '@/utils/assets';
import { currentUserData } from '@/utils/data/static/CurrentUserData';
import Link from 'next/link';
import { Routes } from '@/utils/data/Routes';
const MyProfileCard = () => {
  return (
    <div className={styles.profileCard}>
      <div
        style={{
          background: `url(${CoverPlaceholderURL}) center center/cover`,
        }}
        className={styles.profileCard_cover}
      >
        <div className={styles.profileCard_cover_icon}>
          <HiEllipsisVertical />
        </div>
      </div>
      <div className={styles.profileCard_info}>
        <div className={styles.profileCard_info_stats}>
          <div className={styles.profileCard_info_stats_count}>
            {currentUserData.followers_count}
          </div>
          <div className={styles.profileCard_info_stats_label}>Followers</div>
        </div>
        <div className={styles.profileCard_info_picture}>
          <div className={styles.profileCard_info_picture_container}>
            <div
              style={{
                background: `url(${currentUserData.profile_image.large}) center center/cover`,
              }}
            ></div>
          </div>
        </div>
        <div className={styles.profileCard_info_stats}>
          <div className={styles.profileCard_info_stats_count}>
            {currentUserData.following_count}
          </div>
          <div className={styles.profileCard_info_stats_label}>Following</div>
        </div>
      </div>
      <div className={styles.profileCard_user}>
        <div className={styles.profileCard_user_name}>
          {currentUserData.name}
        </div>
        <div className={styles.profileCard_user_id}>
          @{currentUserData.username}
        </div>
        <div className={styles.profileCard_user_desc}>
          Hello I{"'"}m a photographer with great open ideas and awesome ready
          state⭐
        </div>
      </div>
      <div className={styles.profileCard_button_container}>
        <div className={styles.profileCard_button_container_inner}>
          <Link href={Routes.USER_PROFILE(currentUserData.username)}>
            <button className="">My Profile</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyProfileCard;
