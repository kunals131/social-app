import React from 'react';
import styles from './Activity.module.css';

const ActivityItem = ()=>{
    return (
        <div className={styles.activity_item}>
            <div className={styles.activity_item_img}>
                <div></div>
            </div>
            <div className={styles.activity_item_info}>
                <div>
                    <p className={styles.activity_item_info_time}>5h ago</p>
                    <div className={styles.activity_item_info_message}>
                        <span className=''>Robert Fox</span> just accepted your invite request.
                    </div>
                </div>
                <div className={styles.activity_item_info_seen}></div>
            </div>
        </div>
    )
}

const Activity = () => {
  return (
    <div className={styles.activity_container}>
      <div className={styles.activity_header}>Recent Activity</div>
      <div className={styles.activity_list}>
        <ActivityItem/>
        <ActivityItem/>
      </div>
    </div>
  );
};

export default Activity;
