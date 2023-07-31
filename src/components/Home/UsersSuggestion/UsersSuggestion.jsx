import React from 'react';
import styles from './UserSuggestion.module.css';
import { HiOutlineUserPlus } from 'react-icons/hi2';
import { UsersPlaceholderData } from '@/utils/data/static/UsersPlaceholderData';
import Image from 'next/image';
import Link from 'next/link';
import { Routes } from '@/utils/data/Routes';

const UserCard = ({ profileImage, name, username }) => {
  return (
    <div className={styles.user_suggestions_card}>
      <Link href={Routes.USER_PROFILE(username)}>
        <div className={styles.user_suggestions_card_info}>
          <div className={styles.user_suggestions_card_info_img_container}>
            <Image
              src={profileImage}
              alt={name}
              fill
              className={styles.user_suggestions_card_info_img}
            />
          </div>
          <div>
            <div className={styles.user_suggestions_card_info_name}>{name}</div>
            <div className={styles.user_suggestions_card_info_username}>
              @{username}
            </div>
          </div>
        </div>
      </Link>
      <div className={styles.user_suggestions_card_action}>
        <HiOutlineUserPlus
          strokeWidth={1}
          className={styles.user_suggestions_card_action_icon}
        />
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
        {UsersPlaceholderData.slice(0, 5).map((user) => {
          return (
            <UserCard
              key={user.id}
              profileImage={user.profile_image.medium}
              name={user.name}
              username={user.username}
            />
          );
        })}
      </div>
    </div>
  );
}

export default UsersSuggestion;
