import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksSubject = new BehaviorSubject<Task[]>([
    { id: 1, title: 'Sample Task', description: 'This is a sample task', completed: false, createdAt: new Date(), updatedAt: new Date() },
    { id: 2, title: 'Another Task', description: 'This is another sample task', completed: true, createdAt: new Date(), updatedAt: new Date() }
  ]);
  public tasks$ = this.tasksSubject.asObservable();

  constructor() { }

  getTasks(): Observable<Task[]> {
    return this.tasks$;
  }

  getTaskById(id: number): Observable<Task | undefined> {
    const tasks = this.tasksSubject.value;
    const task = tasks.find(t => t.id === id);
    return new Observable(observer => observer.next(task));
  }

  addTask(task: Omit<Task, 'id'>): void {
    const tasks = [...this.tasksSubject.value];
    const newTask: Task = {
      ...task,
      id: this.generateId(tasks),
      createdAt: new Date(),
      updatedAt: new Date()
    };
    tasks.push(newTask);
    this.tasksSubject.next(tasks);
  }

  updateTask(updatedTask: Task): void {
    const tasks = this.tasksSubject.value.map(task => 
      task.id === updatedTask.id ? { ...updatedTask, updatedAt: new Date() } : task
    );
    this.tasksSubject.next(tasks);
  }

  deleteTask(id: number): void {
    const tasks = this.tasksSubject.value.filter(task => task.id !== id);
    this.tasksSubject.next(tasks);
  }

  private generateId(tasks: Task[]): number {
    return tasks.length > 0 ? Math.max(...tasks.map(t => t.id || 0)) + 1 : 1;
  }
}

