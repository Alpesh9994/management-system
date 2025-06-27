export const environment = {
  production: true,
  apiUrl: 'https://api.company-management.com/api',
  wsUrl: 'wss://api.company-management.com',

  // Feature flags
  features: {
    realTimeUpdates: true,
    fileUpload: true,
    analytics: true,
    notifications: true,
    offlineMode: true,
  },

  // API Endpoints
  endpoints: {
    auth: {
      login: '/auth/login',
      register: '/auth/register',
      logout: '/auth/logout',
      refresh: '/auth/refresh',
      profile: '/auth/profile',
    },
    employees: {
      list: '/employees',
      create: '/employees',
      update: '/employees/:id',
      delete: '/employees/:id',
      search: '/employees/search',
      profile: '/employees/:id/profile',
    },
    projects: {
      list: '/projects',
      create: '/projects',
      update: '/projects/:id',
      delete: '/projects/:id',
      analytics: '/projects/:id/analytics',
      members: '/projects/:id/members',
    },
    tasks: {
      list: '/tasks',
      create: '/tasks',
      update: '/tasks/:id',
      delete: '/tasks/:id',
      status: '/tasks/:id/status',
      assign: '/tasks/:id/assign',
    },
    departments: {
      list: '/departments',
      create: '/departments',
      update: '/departments/:id',
      delete: '/departments/:id',
    },
    reports: {
      employees: '/reports/employees',
      projects: '/reports/projects',
      analytics: '/reports/analytics',
    },
  },

  // App Configuration
  app: {
    name: 'Company Management System',
    version: '1.0.0',
    defaultLanguage: 'en',
    supportedLanguages: ['en', 'es', 'fr'],
    defaultPageSize: 20,
    maxPageSize: 100,
    sessionTimeout: 60 * 60 * 1000, // 1 hour
    refreshTokenInterval: 10 * 60 * 1000, // 10 minutes
  },

  // Logging Configuration
  logging: {
    level: 'error',
    enableConsoleLogging: false,
    enableRemoteLogging: true,
    remoteLoggingUrl: 'https://logs.company-management.com',
  },

  // Security Configuration
  security: {
    enableHttps: true,
    enableCors: true,
    enableCsrf: true,
    tokenStorageKey: 'auth_token',
    refreshTokenStorageKey: 'refresh_token',
    userStorageKey: 'current_user',
  },
};
