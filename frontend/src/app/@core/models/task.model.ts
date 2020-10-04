export enum TaskState { NEW, COMPLETE, OVERDUE }
export enum TaskPriority { HIGH, MEDIUM, LOW }

export interface Task {
  id?: string;
  title: string;
  description: string;
  state: TaskState;
  priority: TaskPriority;
  due_date: number;
  user_id: string;
}

export type CreateTaskInput = Omit<Task, 'id' | 'user_id' | 'state'>;
