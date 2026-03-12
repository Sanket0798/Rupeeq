import { env } from '../config/env';

/**
 * API utility for making HTTP requests
 * Centralized error handling and request configuration
 */

class APIError extends Error {
  constructor(message, status, data) {
    super(message);
    this.name = 'APIError';
    this.status = status;
    this.data = data;
  }
}

/**
 * Base fetch wrapper with timeout and error handling
 */
const fetchWithTimeout = async (url, options = {}, timeout = env.apiTimeout) => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(id);
    return response;
  } catch (error) {
    clearTimeout(id);
    if (error.name === 'AbortError') {
      throw new APIError('Request timeout', 408, null);
    }
    throw error;
  }
};

/**
 * Main API request function
 */
export const apiRequest = async (endpoint, options = {}) => {
  const url = `${env.apiBaseUrl}${endpoint}`;
  
  const defaultHeaders = {
    'Content-Type': 'application/json',
  };

  // Add auth token if available
  const token = localStorage.getItem(env.authTokenKey);
  if (token) {
    defaultHeaders['Authorization'] = `Bearer ${token}`;
  }

  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  try {
    const response = await fetchWithTimeout(url, config);

    // Handle non-JSON responses
    const contentType = response.headers.get('content-type');
    const isJSON = contentType && contentType.includes('application/json');

    if (!response.ok) {
      const errorData = isJSON ? await response.json() : await response.text();
      throw new APIError(
        errorData.message || 'Request failed',
        response.status,
        errorData
      );
    }

    return isJSON ? await response.json() : await response.text();
  } catch (error) {
    if (error instanceof APIError) {
      throw error;
    }
    throw new APIError(error.message || 'Network error', 0, null);
  }
};

/**
 * Convenience methods for different HTTP verbs
 */
export const api = {
  get: (endpoint, options = {}) =>
    apiRequest(endpoint, { ...options, method: 'GET' }),

  post: (endpoint, data, options = {}) =>
    apiRequest(endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(data),
    }),

  put: (endpoint, data, options = {}) =>
    apiRequest(endpoint, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(data),
    }),

  patch: (endpoint, data, options = {}) =>
    apiRequest(endpoint, {
      ...options,
      method: 'PATCH',
      body: JSON.stringify(data),
    }),

  delete: (endpoint, options = {}) =>
    apiRequest(endpoint, { ...options, method: 'DELETE' }),
};

/**
 * Auth-specific API calls
 */
export const authAPI = {
  sendOTP: (mobileNumber) =>
    api.post('/auth/send-otp', { mobileNumber }),

  verifyOTP: (mobileNumber, otp) =>
    api.post('/auth/verify-otp', { mobileNumber, otp }),

  refreshToken: () =>
    api.post('/auth/refresh-token', {
      refreshToken: localStorage.getItem(env.refreshTokenKey),
    }),

  logout: () => {
    localStorage.removeItem(env.authTokenKey);
    localStorage.removeItem(env.refreshTokenKey);
  },
};

/**
 * Loan application API calls
 */
export const loanAPI = {
  submitApplication: (data) =>
    api.post('/loans/apply', data),

  getApplicationStatus: (applicationId) =>
    api.get(`/loans/status/${applicationId}`),

  getLoanOffers: (userId) =>
    api.get(`/loans/offers/${userId}`),
};

export default api;
