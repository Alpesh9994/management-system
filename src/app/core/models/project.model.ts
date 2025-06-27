export interface Project {
  id: string;
  name: string;
  description?: string;
  status: ProjectStatus;
  priority: ProjectPriority;
  startDate: Date;
  endDate?: Date;
  budget?: number;
  managerId: string;
  teamMemberIds: string[];
  milestones?: Milestone[];
  tasks?: string[];
  documents?: Document[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Milestone {
  id: string;
  name: string;
  dueDate: Date;
  completed: boolean;
}

export interface Document {
  id: string;
  name: string;
  url: string;
  uploadedAt: Date;
}

export type ProjectStatus = 'planned' | 'active' | 'on-hold' | 'completed' | 'cancelled';
export type ProjectPriority = 'low' | 'medium' | 'high' | 'critical'; 