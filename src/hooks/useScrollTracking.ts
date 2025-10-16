import { useEffect, useRef } from 'react';
import { trackScroll } from '../services/gtm';

// Milestones de scroll que queremos trackear
const SCROLL_MILESTONES = [25, 50, 75, 90];

export const useScrollTracking = () => {
  const trackedMilestones = useRef<Set<number>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      const scrollPercentage = Math.round(
        ((scrollTop + windowHeight) / documentHeight) * 100
      );

      // Trackear cada milestone solo una vez
      SCROLL_MILESTONES.forEach(milestone => {
        if (scrollPercentage >= milestone && !trackedMilestones.current.has(milestone)) {
          trackedMilestones.current.add(milestone);
          trackScroll(milestone);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};
