export interface Task {
  id: number; // Unique identifier for the task
  title: string; // Title of the task
  description?: string; // Optional description of the task
  completed: boolean; // Indicates if the task is completed
  createdAt: Date; // Timestamp when the task was created
  updatedAt?: Date; // Optional timestamp when the task was last updated
  dueDate?: Date; // Optional due date for the task
  priority?: 'LOW' | 'MEDIUM' | 'HIGH'; // Optional priority level for
}
