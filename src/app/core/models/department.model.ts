export interface Department {
  id: string;
  name: string;
  description?: string;
  headId?: string; // User ID of department head
  parentDepartmentId?: string;
  createdAt: Date;
  updatedAt: Date;
} 