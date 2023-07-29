import React from 'react';
import styles from './UserSuggestion.module.css';
import { HiOutlineUserPlus } from 'react-icons/hi2';

const UserCard = () => {
  return (
    <div className={styles.user_suggestions_card}>
      <div className={styles.user_suggestions_card_info}>
        <div className={styles.user_suggestions_card_info_img}></div>
        <div>
          <div className={styles.user_suggestions_card_info_name}>
            Umaid Rasial
          </div>
          <div className={styles.user_suggestions_card_info_username}>
            Followed by rest
          </div>
        </div>
      </div>
      <div className={styles.user_suggestions_card_action}>
        <HiOutlineUserPlus />
      </div>
    </div>
  );
};

function UsersSuggestion() {
  return (
    <div className={styles.user_suggestions}>
      <div className={styles.user_suggestions_header}>
        <div className={styles.user_suggestions_header_title}>
          Suggested For You
        </div>
        <div className={styles.user_suggestions_header_action}>See all</div>
      </div>
      <div className={styles.user_suggestions_cards}>
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  );
}

export default UsersSuggestion;
