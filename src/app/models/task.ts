export interface Task {
  id?: number;
  title: string;
  date: Date;
  description?: string;
  completed: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
