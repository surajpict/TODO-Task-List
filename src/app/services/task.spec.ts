import { TestBed } from '@angular/core/testing';

import { TaskService } from './task';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have initial tasks', () => {
    let tasks: any;
    service.getTasks().subscribe(result => {
      tasks = result;
    });
    expect(tasks.length).toBeGreaterThan(0);
  });

  it('should add a new task', () => {
    const initialTasksLength = service['tasksSubject'].value.length;
    const newTask = {
      title: 'Test Task',
      description: 'Test Description',
      completed: false
    };
    
    service.addTask(newTask);
    
    expect(service['tasksSubject'].value.length).toBe(initialTasksLength + 1);
  });

  it('should update a task', () => {
    const tasks = service['tasksSubject'].value;
    const firstTask = tasks[0];
    if (firstTask) {
      const updatedTask = { ...firstTask, title: 'Updated Title' };
      service.updateTask(updatedTask);
      
      const updatedTasks = service['tasksSubject'].value;
      const updatedTaskInList = updatedTasks.find(t => t.id === firstTask.id);
      expect(updatedTaskInList?.title).toBe('Updated Title');
    }
  });

  it('should delete a task', () => {
    const initialTasksLength = service['tasksSubject'].value.length;
    const firstTaskId = service['tasksSubject'].value[0]?.id;
    
    if (firstTaskId) {
      service.deleteTask(firstTaskId);
      expect(service['tasksSubject'].value.length).toBe(initialTasksLength - 1);
    }
  });
});
