import { useEffect, useRef, useState } from "react";

interface UseStaggeredAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  baseDelay?: number;
  staggerDelay?: number;
}

export const useStaggeredAnimation = (options: UseStaggeredAnimationOptions = {}) => {
  const { 
    threshold = 0.1, 
    rootMargin = "0px", 
    baseDelay = 0,
    staggerDelay = 0.1 
  } = options;
  
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const getStaggerDelay = (index: number) => {
    return `${baseDelay + (index * staggerDelay)}s`;
  };

  const getStaggerStyle = (index: number) => ({
    animationDelay: getStaggerDelay(index),
    opacity: isVisible ? undefined : 0,
  });

  return { 
    ref, 
    isVisible, 
    getStaggerDelay,
    getStaggerStyle 
  };
};
