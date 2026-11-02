import { env } from '../../config/env.js';

// Initialize HubSpot Client (Placeholder for actual @hubspot/api-client)
export const hubspotClient = env.HUBSPOT_API_KEY ? {
  apiKey: env.HUBSPOT_API_KEY,
  createContact: async (email: string, firstName: string) => {
    console.log(`[HubSpot] Creating contact: ${email} (${firstName})`);
    // Actual API call goes here when you install @hubspot/api-client
  }
} : null;