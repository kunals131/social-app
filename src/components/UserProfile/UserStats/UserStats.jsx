import React from 'react';
import styles from './UserStats.module.css';
const UserStats = ({ value, label }) => {
  return (
    <div className={styles.user_stats}>
      <div>{value}</div>
      <p>{label}</p>
    </div>
  );
};

export default UserStats;
