import React from 'react';
import styles from '@/styles/User.module.css';
import { BaseLayout } from '@/components/common';
import {
  Activity,
  // ExploreFeed,
  // Post,
  PostsContainer,
  UsersSuggestion,
} from '@/components/Home';
import ProfileCoverInfo from '@/components/UserProfile/ProfileCoverInfo/ProfileCoverInfo';

import UserDetails from '@/components/UserProfile/UserDetails/UserDetails';
import { getUserByUsername, getUserPhotos } from '@/lib/unsplash/services';
import { useFetchUserPhotos } from '@/hooks/photos/useFetchUserPhotos';
import InfiniteScrollContainer from '@/components/common/InfiniteScrollContainer/InfiniteScrollContainer';

const UserProfile = ({ userData, initialLoadPhotos, username }) => {
  const { photos, fetchNext, hasNextPage, isError, isFetchingNextPage } =
    useFetchUserPhotos({
      initialData: initialLoadPhotos,
      username,
    });
  return (
    <BaseLayout>
      <div className={styles.userProfile}>
        <div>
          <ProfileCoverInfo user={userData} />
          <div className={styles.userProfile_info}>
            <div>
              <UserDetails  user={userData}/>
              <div className={styles.userProfile_collections}>
                {/* <ExploreFeed /> */}
              </div>
            </div>
            <div className="">
              <div className={styles.userProfile_posts_list}>
                <InfiniteScrollContainer
                  fetchMore={fetchNext}
                  hasMore={hasNextPage}
                  isError={isError}
                  isFetching={isFetchingNextPage}
                >
                  <PostsContainer photos={photos} />
                </InfiniteScrollContainer>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.userProfile_additionals}>
          <Activity />
          <UsersSuggestion />
        </div>
      </div>
    </BaseLayout>
  );
};

export const getServerSideProps = async (req) => {
  const username = req.query.username;
  console.log(username)
  let userData;
  let initialLoadPhotos;
  try {
    userData = await getUserByUsername(username);
  } catch (err) {
    console.log('Fetch User Error ')
    return {
      notFound: true,
    };
  }
  try {
    initialLoadPhotos = await getUserPhotos(username);
  } catch (err) {
    console.log(err);
    return {
      notFound: true,
    }
  }
  return {
    props: {
      userData,
      initialLoadPhotos,
      username,
    },
  };
};

export default UserProfile;
