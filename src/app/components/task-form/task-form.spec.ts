import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskForm } from './task-form';
import { FormsModule } from '@angular/forms';

describe('TaskForm', () => {
  let component: TaskForm;
  let fixture: ComponentFixture<TaskForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskForm, FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty form data', () => {
    expect(component.formData.title).toBe('');
    expect(component.formData.description).toBe('');
    expect(component.formData.completed).toBe(false);
  });

  it('should have default task as null', () => {
    expect(component.task).toBeNull();
  });

  it('should reset form when resetForm is called', () => {
    component.formData = {
      title: 'Test',
      description: 'Description',
      completed: true
    };
    
    component.resetForm();
    
    expect(component.formData.title).toBe('');
    expect(component.formData.description).toBe('');
    expect(component.formData.completed).toBe(false);
  });
});
