import React from 'react';
import styles from './MyProfileCard.module.css';
import { HiEllipsisVertical } from 'react-icons/hi2';
import { CoverPlaceholderURL, UserPlaceholderURL } from '@/utils/assets';
const MyProfileCard = () => {
  return (
    <div className={styles.profileCard}>
      <div style={{
                background: `url(${CoverPlaceholderURL}) center center/cover`,
              }} className={styles.profileCard_cover}>
        <div className={styles.profileCard_cover_icon}>
          <HiEllipsisVertical />
        </div>
      </div>
      <div className={styles.profileCard_info}>
        <div className={styles.profileCard_info_stats}>
          <div className={styles.profileCard_info_stats_count}>1984</div>
          <div className={styles.profileCard_info_stats_label}>Followers</div>
        </div>
        <div className={styles.profileCard_info_picture}>
          <div className={styles.profileCard_info_picture_container}>
            <div
              style={{
                background: `url(${UserPlaceholderURL}) center center/cover`,
              }}
            ></div>
          </div>
        </div>
        <div className={styles.profileCard_info_stats}>
          <div className={styles.profileCard_info_stats_count}>1984</div>
          <div className={styles.profileCard_info_stats_label}>Following</div>
        </div>
      </div>
      <div className={styles.profileCard_user}>
        <div className={styles.profileCard_user_name}>Alex Leeds</div>
        <div className={styles.profileCard_user_id}>@alextab</div>
        <div className={styles.profileCard_user_desc}>
          Hello I{"'"}m a photographer with great open ideas and awesome ready state⭐
        </div>
      </div>
      <div className={styles.profileCard_button_container}>
        <div className={styles.profileCard_button_container_inner}>
          <button className="">My Profile</button>
        </div>
      </div>
    </div>
  );
};

export default MyProfileCard;
