import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import UserDetailItem from '../UserDetailItem/UserDetailItem';
import styles from './UserDetails.module.css';
import { HiGlobeAmericas, HiOutlineMapPin } from 'react-icons/hi2';
import {AiOutlineInstagram} from 'react-icons/ai'
import {FiTwitter} from 'react-icons/fi';
import TextTruncateExpand from '@/components/common/TextTruncateExpand';
const UserDetails = ({user}) => {
  return (
    <div className={styles.user_details}>
      <div className={styles.user_details_header}>
        <div className={styles.user_details_header_title}>About Me</div>
        <BsThreeDots></BsThreeDots>
      </div>
      <div className={styles.user_details_bio}>
        <TextTruncateExpand maxLength={100}  text={user.bio}/>
      </div>
      <div className={styles.user_details_container}>
        <UserDetailItem
          icon={<HiOutlineMapPin size={18} />}
          value="New york, US"
        />
        <UserDetailItem
          icon={<HiGlobeAmericas size={18} />}
          value="www.portfolio.com"
        />
        <UserDetailItem
          icon={<AiOutlineInstagram size={18} />}
          value="@radios331"
        />
        <UserDetailItem
          icon={<FiTwitter strokeWidth={1.5} size={17} />}
          value="@radios331"
        />
      </div>
      <button className={styles.user_details_button}>Unsplash Profile</button>
    </div>
  );
};

export default UserDetails;
