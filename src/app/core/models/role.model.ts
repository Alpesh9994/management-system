export interface Role {
  id: string;
  name: string; // e.g. 'admin', 'manager', 'employee'
  description?: string;
  permissions?: string[];
} 