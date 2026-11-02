import { CONFIG } from '@/config';

// Declare global types for external scripts
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    clarity: (...args: any[]) => void;
  }
}

export const trackPageView = (url: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', CONFIG.analytics.ga4Id, {
      page_path: url,
    });
  }
};

export const trackEvent = (action: string, category: string, label: string, value?: number) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
  
  // Example: Track AI Assistant clicks specifically
  if (action === 'click_ai_assistant') {
    console.log('[Clarity] Tracked AI Assistant interaction');
  }
};