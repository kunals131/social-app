import React from 'react';
import styles from './Activity.module.css';
import { RecentActivityPlaceholderData } from '@/utils/data/static/RecentActivityPlaceholderData';
import Image from 'next/image';

const ActivityItem = ({ user, timeAgo, message, seen }) => {
  return (
    <div className={styles.activity_item}>
      <div style={{borderColor : !seen?'#9a55e6':'gray'}} className={styles.activity_item_img_container}>
        <Image
          src={user.profile_image.medium}
          alt={user.username}
          fill
          className={styles.activity_item_img}
        />
      </div>
      <div className={styles.activity_item_info}>
        <div>
          <p className={styles.activity_item_info_time}>{timeAgo}</p>
          <div className={styles.activity_item_info_message}>
            <span className="">{user.first_name}</span> {message}
          </div>
        </div>
        <div style={{background :  !seen?'#9a55e6':'gray'}} className={styles.activity_item_info_seen}></div>
      </div>
    </div>
  );
};

const Activity = () => {
  return (
    <div className={styles.activity_container}>
      <div className={styles.activity_header}>Recent Activity</div>
      <div className={styles.activity_list}>
        {RecentActivityPlaceholderData.map((activity) => {
          return <ActivityItem
            key={activity.id}
            user={activity.user}
            timeAgo={activity.time}
            message={activity.message}
            seen={activity.seen}
          />;
        })}
      </div>
    </div>
  );
};

export default Activity;
