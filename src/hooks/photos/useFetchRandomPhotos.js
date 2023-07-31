import { getRandomPhotos } from '@/lib/unsplash/services';
import { INFINITE_SCROLL_LIMIT } from '@/utils/data/constants';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useState } from 'react';

export const useFetchRandomPhotos = ({ initialData = [] }) => {
  const [currentPage, setCurrentPage] = useState(2);
  const [isActive, setIsActive] = useState(false);
  const {
    data: photos,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    isError,
    error,
  } = useInfiniteQuery(['photos'], getRandomPhotos, {
    enabled: isActive,
    getNextPageParam: (/*lastPage, pages*/) => {
      if (currentPage > INFINITE_SCROLL_LIMIT) return undefined;
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
  });
  const handleFetchNext = () => {
    if (!isActive) {
      setIsActive(true);
    }
    fetchNextPage();
  };

  return {
    fetchNext: handleFetchNext,
    photos,
    isFetchingNextPage,
    hasNextPage,
    isError,
    error,
  };
};
