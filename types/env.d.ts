// types/env.d.ts

namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_SUPABASE_URL: string;
    NEXT_PUBLIC_SUPABASE_ANON_KEY: string;
    SUPABASE_SERVICE_ROLE_KEY: string;
    MAILGUN_API_KEY: string;
    MAILGUN_DOMAIN: string;
    MAILGUN_API_BASE_URL?: string;
    STRIPE_SECRET_KEY: string;
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: string;
    NEXT_PUBLIC_SITE_URL: string;
    // Add other environment variables as needed
  }
}
