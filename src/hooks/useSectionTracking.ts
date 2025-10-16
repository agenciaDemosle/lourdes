import { useEffect, useRef } from 'react';
import { trackSectionView } from '../services/gtm';

export const useSectionTracking = (sectionName: string) => {
  const hasTracked = useRef(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTracked.current) {
            hasTracked.current = true;
            trackSectionView(sectionName);
          }
        });
      },
      {
        threshold: 0.3, // Se activa cuando el 30% de la sección es visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [sectionName]);

  return sectionRef;
};
