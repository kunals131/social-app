import React from 'react';
import styles from '@/styles/User.module.css';
import { BaseLayout } from '@/components/common';
import {
  Activity,
  ExploreFeed,
  Post,
  UsersSuggestion,
} from '@/components/Home';
import ProfileCoverInfo from '@/components/UserProfile/ProfileCoverInfo/ProfileCoverInfo';

import UserDetails from '@/components/UserProfile/UserDetails/UserDetails';

const UserProfile = () => {
  return (
    <BaseLayout>
      <div className={styles.userProfile}>
        <div>
          <ProfileCoverInfo />
          <div className={styles.userProfile_info}>
            <div>
              <UserDetails />
              <div className={styles.userProfile_collections}>
                <ExploreFeed />
              </div>
            </div>
            <div className="">
              <div className={styles.userProfile_posts_list}>
                <Post />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Activity />
          <UsersSuggestion />
        </div>
      </div>
    </BaseLayout>
  );
};

export default UserProfile;
