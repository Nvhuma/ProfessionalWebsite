import { useState, useEffect, RefObject } from 'react';

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

export function useIntersectionObserver(
  elementRef: RefObject<Element>,
  options: IntersectionObserverOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  }
): boolean {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    observer.observe(element);

    return () => {
      observer.unobserve(element);
      observer.disconnect();
    };
  }, [elementRef, options]);

  return isVisible;
}

export default useIntersectionObserver;
