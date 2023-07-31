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
import {
  getCollections,
  getRandomPhotos,
  getTopics,
} from '@/lib/unsplash/services';
import { useFetchRandomPhotos } from '@/hooks/photos/useFetchRandomPhotos';
import { InfiniteScrollContainer } from '@/components/common';
import { useFetchColections } from '@/hooks/collections/useFetchCollections';
import { useFetchTopics } from '@/hooks/topics/useFetchTopics';
import { parseErrorMessage } from '@/lib/unsplash/utils';

const Home = ({
  initialLoadPhotos,
  initialLoadCollections,
  initialLoadTopics,
}) => {
  const { photos, isFetchingNextPage, fetchNext, hasNextPage, isError } =
    useFetchRandomPhotos({
      initialData: initialLoadPhotos,
    });
  const { collections } = useFetchColections({
    initialData: initialLoadCollections,
  });
  const { topics } = useFetchTopics({
    initialData: initialLoadTopics,
  });
  return (
    <BaseLayout>
      <div className={styles.home}>
        <div className={styles.home_left}>
          <MyProfileCard />
          <ExploreFeed collections={collections} />
        </div>
        <div className={styles.home_center}>
          <StoriesCollection topics={topics} />
          <InfiniteScrollContainer
            fetchMore={fetchNext}
            hasMore={hasNextPage}
            isError={isError}
            isFetching={isFetchingNextPage}
          >
            <div className={styles.home_center_posts}>
              <PostsContainer photos={photos} />
            </div>
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
    const photos = await getRandomPhotos();
    const collections = await getCollections();
    const topics = await getTopics();

    return {
      props: {
        initialLoadPhotos: photos,
        initialLoadCollections: collections,
        initialLoadTopics: topics,
      },
    };
  } catch (err) {
    console.log(err?.response, 'Home Page Error');
    let errMessage = parseErrorMessage(err);
    return {
      redirect: {
        destination: errMessage?.includes('Rate Limit Exceeded')
          ? '/error'
          : '/500',
        permanent: false,
      },
    };
  }
};

export default Home;
