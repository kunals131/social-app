const { useState, useEffect } = require('react');

const useIsMounted = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  return {
    isMounted
  }
};


export default useIsMounted