import React from 'react';
import styles from './UserDetailItem.module.css'
const UserDetailItem = ({ icon, value }) => {
  return (
    <div className={styles.user_detail_item}>
      <div>{icon}</div>
      <p>{value}</p>
    </div>
  );
};

export default UserDetailItem;
