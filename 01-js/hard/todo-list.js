/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor() {
    this.todos = [] 
  }

  getAll() {
    return this.todos;
  }

  get(index) {
    if(index >= this.todos.length) {
      return null;
    }
    return this.todos[index];
  }

  add(todo) {
    this.todos.push(todo);
  }
  remove(index) {
    this.todos.splice(index,1);
  }

  update(index,updatedTodo) {
    if(index < this.todos.length) {
      this.todos.splice(index,0,updatedTodo);
      this.todos.splice(index+1,1);
    }
    
  }

  clear() {
    this.todos = [];
  }

}

module.exports = Todo;
