import React from 'react';
import styles from '@/styles/User.module.css';
import { BaseLayout } from '@/components/common';
import { Activity, PostsContainer, UsersSuggestion } from '@/components/Home';
import { ProfileCoverInfo, UserDetails } from '@/components/UserProfile';
import { getUserByUsername, getUserPhotos } from '@/lib/unsplash/services';
import { useFetchUserPhotos } from '@/hooks/photos/useFetchUserPhotos';
import { InfiniteScrollContainer } from '@/components/common';
import { parseErrorMessage } from '@/lib/unsplash/utils';

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
              <UserDetails user={userData} />
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

//Server Side Rendering
export const getServerSideProps = async (req) => {
  const username = req.query.username;
  let userData;
  let initialLoadPhotos;
  try {
    userData = await getUserByUsername(username);
    initialLoadPhotos = await getUserPhotos(username);
    return {
      props: {
        userData,
        initialLoadPhotos,
        username,
      },
    };
  } catch (err) {
    if (err.status === 404) return { notFound: true };
    let errMessage = parseErrorMessage(err);
    if (errMessage?.includes('Rate Limit Exceeded'))
      return {
        redirect: {
          destination: '/error',
          permanent: false,
        },
      };
    return {
      redirect: {
        destination: '/500',
        permanent: false,
      },
    };
  }
};

export default UserProfile;
