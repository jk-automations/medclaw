// Analytics Configuration
// Set up Umami analytics: https://umami.is/docs/environment-variables
// Once you have a tracking ID, add it to your .env file as NEXT_PUBLIC_UMAMI_ID

export const ANALYTICS_CONFIG = {
  // Umami Analytics - self-hosted, GDPR-compliant
  // Get your free tracking ID at https://umami.is
  umami: {
    enabled: !!process.env.NEXT_PUBLIC_UMAMI_ID,
    url: process.env.NEXT_PUBLIC_UMAMI_URL || 'https://umami.example.com',
    id: process.env.NEXT_PUBLIC_UMAMI_ID || 'YOUR_UMAMI_ID',
  },
} as const;
