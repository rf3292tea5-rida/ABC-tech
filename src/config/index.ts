export const CONFIG = {
  site: {
    name: 'Tech ABC',
    description: 'Build Skills. Build Projects. Build Your Career.',
    url: 'https://techabc.com',
  },
  externalLinks: {
    abcDigitalAgency: 'https://abcdigital.agency', // Centralized URL
  },
  analytics: {
    ga4Id: import.meta.env.VITE_GA4_ID || '',
    clarityId: import.meta.env.VITE_CLARITY_ID || '',
  },
};