import { BaseLayout } from '@/components/common';
import React from 'react';
import styles from '@/styles/Home.module.css';
import {
  Activity,
  ExploreFeed,
  MyProfileCard,
  PostsContainer,
  StoriesCollection,
  UsersSuggestion,
} from '@/components/Home';
import { getRandomPhotos } from '@/lib/unsplash/services';
import { useFetchRandomPhotos } from '@/hooks/photos/useFetchRandomPhotos';
import InfiniteScrollContainer from '@/components/common/InfiniteScrollContainer/InfiniteScrollContainer';

const Home = ({ initialLoadPhotos }) => {
  const { photos, isFetchingNextPage, fetchNext, hasNextPage, isError } =
    useFetchRandomPhotos({
      initialData: initialLoadPhotos,
    });
  return (
    <BaseLayout>
      <div className={styles.home}>
        <div className={styles.home_left}>
          <MyProfileCard />
          <ExploreFeed />
        </div>
        <div className={styles.home_center}>
          <StoriesCollection />
          <InfiniteScrollContainer
            fetchMore={fetchNext}
            hasMore={hasNextPage}
            isError={isError}
            isFetching={isFetchingNextPage}
          >
            <PostsContainer photos={photos} />
          </InfiniteScrollContainer>
        </div>
        <div className={styles.home_right}>
          <Activity />
          <UsersSuggestion />
        </div>
      </div>
    </BaseLayout>
  );
};

export const getServerSideProps = async () => {
  try {
    const result = await getRandomPhotos();

    return {
      props: {
        initialLoadPhotos: result,
      },
    };
  } catch (err) {
    //return to a 500 error page
  }
};

export default Home;
