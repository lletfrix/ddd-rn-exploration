import { MainRepositoryInterface } from "./interfaces/main.repository.interface";
import { TodoService } from "./todo/todo.service";

export class MainDomain {
  repository: MainRepositoryInterface;
  todos: TodoService;

  constructor(properties: { repository: MainRepositoryInterface }) {
    this.repository = properties.repository;
    this.todos = new TodoService({ repository: this.repository.todo });
  }
}