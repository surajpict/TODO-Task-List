import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.html',
  styleUrls: ['./task-form.css'],
})
export class TaskForm {
  @Input() task: (Omit<Task, 'id'> & { id?: number }) | Partial<Task> | null = null;
  @Output() taskSubmit = new EventEmitter<Omit<Task, 'id'> | Task | null>();

  formData: Partial<Task> = {
    title: '',
    date: new Date(),
    description: '',
    completed: false
  };

  ngOnInit(): void {
    if (this.task) {
      this.formData = { ...this.task };
    }
  }

  ngOnChanges(): void {
    if (this.task) {
      this.formData = { ...this.task };
    }
  }

  onSubmit(): void {
    if (this.formData.title) {
      if (this.task && 'id' in this.task && this.task.id) {
        // Update existing task
        this.taskSubmit.emit({
          id: this.task.id,
          title: this.formData.title,
          description: this.formData.description,
          completed: this.formData.completed || false
        } as Task);
      } else {
        // Add new task
        this.taskSubmit.emit({
          title: this.formData.title,
          description: this.formData.description,
          date: this.formData.date || new Date(),
          completed: this.formData.completed || false
        });
      }
      // Reset form
      this.resetForm();
    }
  }

  resetForm(): void {
    this.formData = {
      title: '',
      date: new Date(),
      description: '',
      completed: false
    };
  }

  onCancel(): void {
    this.resetForm();
    // Emit an event to notify parent that form was cancelled
    this.taskSubmit.emit(undefined);
  }
}
