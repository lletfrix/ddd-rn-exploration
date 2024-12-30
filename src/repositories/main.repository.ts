import { TodoRepository } from './todo/todo.repository';

export class MainRepository {
  todo: TodoRepository;

  constructor() {
    this.todo = new TodoRepository();
  }
};