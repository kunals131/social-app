import React from 'react'
import styles from './ProfileSwitcher.module.css';
import Image from 'next/image';
import { UserPlaceholderURL } from '@/utils/assets';
import {RiArrowDownSFill} from 'react-icons/ri';
const ProfileSwitcher = () => {
  return (
    <div className={styles.profile_switcher}>
        <div className={styles.profile_switcher_info}>
            <div className={styles.profile_switcher_info_img}>
                <Image fill objectFit='cover' objectPosition='center' src={UserPlaceholderURL}/>
            </div>
            <div className={styles.profile_switcher_info_name}>Evan leeds</div>
        </div>
        <RiArrowDownSFill/>
    </div>
  )
}

export default ProfileSwitcher