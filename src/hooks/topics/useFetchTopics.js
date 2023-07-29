import { getTopics } from '@/lib/unsplash/services';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useState } from 'react';

export const useFetchTopics = ({ initialData = [] }) => {
  const [currentPage, setCurrentPage] = useState(2);
  const [isActive, setIsActive] = useState(false);
  const {
    data: topics,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    isError,
    error,
  } = useInfiniteQuery(
    ['topics'],
    ({ pageParam = 1 }) => getTopics(pageParam),
    {
      enabled: isActive,
      getNextPageParam: (/*lastPage, pages*/) => {
        if (currentPage > 5) return undefined;
        return currentPage;
      },
      onSuccess: () => {
        setCurrentPage((prev) => prev + 1);
      },
      onError: (err) => {
        console.log(err);
      },
      staleTime: 1000 * 60 * 60 * 24 * 7,
      cacheTime: 1000 * 60 * 60 * 24 * 7,
      initialData: {
        pages: [initialData],
      },
    }
  );
  const handleFetchNext = () => {
    if (!isActive) {
      setIsActive(true);
    }
    fetchNextPage();
  };

  return {
    fetchNext: handleFetchNext,
    topics,
    isFetchingNextPage,
    hasNextPage,
    isError,
    error,
  };
};
