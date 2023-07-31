import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import UserDetailItem from '../UserDetailItem/UserDetailItem';
import styles from './UserDetails.module.css';
import { HiGlobeAmericas, HiOutlineMapPin } from 'react-icons/hi2';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';
import TextTruncateExpand from '@/components/common/TextTruncateExpand';
import { parseLocation } from '@/utils/function/parseLocations';
const UserDetails = ({ user }) => {
  return (
    <div className={styles.user_details}>
      <div className={styles.user_details_header}>
        <div className={styles.user_details_header_title}>About Me</div>
        <BsThreeDots></BsThreeDots>
      </div>
      <div className={styles.user_details_bio}>
        <TextTruncateExpand maxLength={100} text={user.bio || 'Amazing user of unsplash!'} />
      </div>
      <div className={styles.user_details_container}>
        <UserDetailItem
          icon={<HiOutlineMapPin size={18} />}
          value={parseLocation(user.location)}
        />
        {user.portfolio_url && (
          <UserDetailItem
            icon={<HiGlobeAmericas size={18} />}
            value={
              <a href={user.portfolio_url} target="_blank">
                {user.portfolio_url}
              </a>
            }
          />
        )}
        {user.instagram_username && (
          <UserDetailItem
            icon={<AiOutlineInstagram size={18} />}
            value={
              <a
                href={`https://instagram.com/${user.instagram_username}`}
                target="_blank"
              >
                {user.instagram_username}
              </a>
            }
          />
        )}
        {user.twitter_username && (
          <UserDetailItem
            icon={<FiTwitter strokeWidth={1.5} size={17} />}
            value={
              <a
                href={`https://twitter.com/${user.twitter_username}`}
                target="_blank"
              >
                {user.twitter_username}
              </a>
            }
          />
        )}
      </div>
      <button className={styles.user_details_button}>
        <a href={user.links.html || `/user/${username}`} target="_blank">
          Unsplash Profile
        </a>
      </button>
    </div>
  );
};

export default UserDetails;
