import { env } from '../../config/env.js';

// Initialize Sentry (Placeholder for actual @sentry/node)
export const initSentry = () => {
  if (env.SENTRY_DSN) {
    console.log('[Sentry] Initialized with DSN:', env.SENTRY_DSN);
    // Sentry.init({ dsn: env.SENTRY_DSN }) goes here
  }
};