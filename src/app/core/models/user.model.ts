export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  position?: string;
  departmentId?: string;
  hireDate?: Date;
  status: 'active' | 'inactive' | 'terminated';
  profilePictureUrl?: string;
  roles: Role[];
  managerId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Role {
  id: string;
  name: string; // e.g. 'admin', 'manager', 'employee'
  description?: string;
} 