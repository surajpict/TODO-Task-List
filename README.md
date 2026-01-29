# To-Do List Application

A feature-rich To-Do List application built with Angular and Salesforce Lightning Design System (SLDS).

## Features

- **Create Tasks**: Add new tasks with title and description
- **View Tasks**: Display all tasks in a responsive table
- **Edit Tasks**: Update existing tasks
- **Delete Tasks**: Remove tasks from the list
- **Mark Complete**: Toggle task completion status
- **Responsive UI**: Works on both desktop and mobile devices
- **Modern UI**: Built with Salesforce Lightning Design System

## Technology Stack

- **Framework**: Angular 18
- **UI Library**: Salesforce Lightning Design System (SLDS)
- **State Management**: RxJS BehaviorSubject
- **Testing**: Jasmine and Karma for unit testing

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── task-list/          # Displays task list
│   │   └── task-form/          # Form for adding/editing tasks
│   ├── services/
│   │   └── task.service.ts     # Handles task operations
│   ├── models/
│   │   └── task.interface.ts   # Defines Task model
│   └── app.component.ts        # Main application component
```

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open your browser to `http://localhost:4200`

## Running Tests

Run unit tests:
```bash
npm test
```

## Functionality

The application provides a complete CRUD interface for managing tasks:

- **Add Task**: Use the form at the top to create new tasks
- **View Task**: All tasks are displayed in the table below
- **Edit Task**: Click the "Edit" button to modify a task
- **Delete Task**: Click the "Delete" button to remove a task
- **Toggle Completion**: Check/uncheck the checkbox to mark tasks as complete/incomplete

## Design Patterns

- **Component-Based Architecture**: Reusable and modular components
- **Service-Oriented State Management**: Centralized task management
- **Reactive Programming**: Using RxJS for state management
- **Type Safety**: Strong typing with TypeScript interfaces

## Testing

The application includes comprehensive unit tests:
- Service tests for task operations
- Component tests for UI interactions
- Form validation tests

## Responsive Design

The UI is designed to work on various screen sizes:
- Desktop: Full table view with all columns
- Mobile: Optimized layout for smaller screens
- Tablet: Adaptive layout between desktop and mobile

## Best Practices Applied

- **Modular Architecture**: Components are organized in separate directories
- **Type Safety**: Interfaces are used to define data structures
- **Separation of Concerns**: Clear distinction between presentation and business logic
- **Clean Code**: Meaningful variable and function names
- **Proper Comments**: Essential code is documented
- **Error Handling**: Proper handling of edge cases