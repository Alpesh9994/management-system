export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  wsUrl: 'ws://localhost:3000',

  // Feature flags
  features: {
    realTimeUpdates: true,
    fileUpload: true,
    analytics: true,
    notifications: true,
    offlineMode: false,
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
    defaultPageSize: 10,
    maxPageSize: 100,
    sessionTimeout: 30 * 60 * 1000, // 30 minutes
    refreshTokenInterval: 5 * 60 * 1000, // 5 minutes
  },

  // Logging Configuration
  logging: {
    level: 'debug',
    enableConsoleLogging: true,
    enableRemoteLogging: false,
    remoteLoggingUrl: '',
  },

  // Security Configuration
  security: {
    enableHttps: false,
    enableCors: true,
    enableCsrf: true,
    tokenStorageKey: 'auth_token',
    refreshTokenStorageKey: 'refresh_token',
    userStorageKey: 'current_user',
  },
};
