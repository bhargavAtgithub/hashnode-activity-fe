import { useState, useEffect, useRef } from 'react';

const useAutoLoader = (next) => {
  const [loadMoreElement, setLoadMoreElement] = useState(null);
  const [autoLoad, setAutoLoad] = useState(false);
  const observer = useRef();

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      const first = entries[0];
      if (first.isIntersecting) {
        next();
      }
    });
  }, []);

  useEffect(() => {
    if (autoLoad) {
      const currentElement = loadMoreElement;
      const currentObserver = observer.current;

      if (currentElement) {
        currentObserver.observe(currentElement);
      }

      return () => {
        if (currentElement) {
          currentObserver.unobserve(currentElement);
        }
      };
    }
  }, [autoLoad, loadMoreElement]);

  return { setLoadMoreElement, autoLoad, setAutoLoad };
};

export default useAutoLoader;
