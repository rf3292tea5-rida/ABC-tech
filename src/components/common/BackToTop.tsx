import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button when user scrolls down 300px
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    
    // Cleanup event listener on component unmount
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`
        fixed right-6 z-40 w-14 h-14 rounded-full shadow-xl flex items-center justify-center 
        transition-all duration-300 ease-in-out hover:scale-110 active:scale-95
        bg-brand-primary text-white hover:bg-brand-primary
        ${isVisible ? 'opacity-100 translate-y-0 bottom-24' : 'opacity-0 translate-y-10 bottom-6 pointer-events-none'}
      `}
    >
      <ArrowUp size={25} strokeWidth={2.5} />
    </button>
  );
}