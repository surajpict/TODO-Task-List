import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task';
import { Task } from '../../models/task';
import { TaskForm } from '../task-form/task-form';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskForm],
  templateUrl: './task-list.html',
  styleUrls: ['./task-list.css'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  editingTask: Task | null = null;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  onTaskAdded(task: Omit<Task, 'id'>): void {
    this.taskService.addTask(task);
  }

  onTaskSubmit(task: Omit<Task, 'id'> | Task | null | undefined): void {
    if (!task) {
      // Form was cancelled
      this.editingTask = null;
      return;
    }
    
    if ('id' in task && task.id) {
      // Update existing task
      this.taskService.updateTask(task as Task);
      this.editingTask = null;
    } else {
      // Add new task
      this.taskService.addTask(task as Omit<Task, 'id'>);
    }
  }

  onEdit(task: Task): void {
    this.editingTask = { ...task };
  }

  onDelete(id: number): void {
    this.taskService.deleteTask(id);
  }

  toggleCompleted(task: Task): void {
    this.taskService.updateTask({ ...task, completed: !task.completed });
  }

  trackByFn(index: number, item: Task): number {
    return item.id || index;
  }
}
