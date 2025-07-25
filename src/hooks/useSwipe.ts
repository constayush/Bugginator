import { useEffect } from 'react';

const useSwipe = (onSwipeLeft: () => void, onSwipeRight: () => void, threshold = 50) => {
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    };

    const handleSwipe = () => {
      const distance = touchEndX - touchStartX;
      if (distance > threshold) onSwipeRight?.(); // Right swipe
      if (distance < -threshold) onSwipeLeft?.(); // Left swipe
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [onSwipeLeft, onSwipeRight, threshold]);
};
export default useSwipe;