// Environment configuration helper
export const env = {
  // API Configuration
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
  apiTimeout: parseInt(import.meta.env.VITE_API_TIMEOUT) || 30000,
  
  // Authentication
  authTokenKey: import.meta.env.VITE_AUTH_TOKEN_KEY || 'rupeeq_auth_token',
  refreshTokenKey: import.meta.env.VITE_REFRESH_TOKEN_KEY || 'rupeeq_refresh_token',
  
  // Feature Flags
  enableAnalytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
  enableChatSupport: import.meta.env.VITE_ENABLE_CHAT_SUPPORT === 'true',
  
  // Environment
  isDevelopment: import.meta.env.VITE_ENV === 'development' || import.meta.env.DEV,
  isProduction: import.meta.env.VITE_ENV === 'production' || import.meta.env.PROD,
  
  // App Configuration
  appName: import.meta.env.VITE_APP_NAME || 'RupeeQ',
  appVersion: import.meta.env.VITE_APP_VERSION || '1.0.0',
};

// Helper to check if running in development
export const isDev = () => env.isDevelopment;

// Helper to check if running in production
export const isProd = () => env.isProduction;

// Helper to get API URL
export const getApiUrl = (endpoint) => {
  return `${env.apiBaseUrl}${endpoint}`;
};
