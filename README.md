# To-Do App Project

## Description
This is a Todo application built with React, TypeScript, and SCSS. The app interacts with a remote API to allow users to manage their todo lists, including adding, editing, and deleting items.

## Demo
![image](https://github.com/user-attachments/assets/644f6d7c-a0ab-4864-9038-9e3c70e7deb3)

## Project Structure
The project is organized using React components, TypeScript for type safety, and SCSS for styling. The structure is modular, allowing for easy maintenance and scalability.

- Components: Reusable UI components like TodoList, TodoItem etc.
- Styles: Organized SCSS files following the BEM methodology for consistent styling.
- Hooks: Custom hooks for handling API calls.
- Services: Service modules for interacting with the remote API.
## Features
- Add Todos: Easily add new tasks to your todo list.
- Edit Todos: Modify existing tasks directly from the UI.
- Delete Todos: Remove tasks that are no longer needed.
- Remote API Integration: The app saves and retrieves todo items from a remote API, ensuring your data is always up to date.
## Technologies
- React: Frontend framework for building the user interface.
- TypeScript: Superset of JavaScript providing type safety and better developer tooling.
- SCSS: CSS preprocessor used for organizing and maintaining styles.
- Fetch: Used for making HTTP requests to the remote API.
## API
The application interacts with a remote API to manage the todo data. The following operations are supported:

- GET: Fetch the list of todos.
- POST: Add a new todo item.
- PATCH: Update an existing todo item.
- DELETE: Remove a todo item.

## Installation
To run the project locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/vitalii-lytvynenko/task-list-fe.git
   ```
2. Navigate to the project directory:
   ```
   cd task-list-fe
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Start the project:
   ```
   npm start
   ```

## Usage
Once the project is running, you can interact with the todo list via the user interface. The app allows you to:

- Add new todo items.
- Edit existing todo items.
- Delete todo items.

The app communicates with a remote API to persist data, ensuring that your todos are saved across sessions.

