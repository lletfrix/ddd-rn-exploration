import { RepositoryInterface } from "@/src/interfaces/repository.interface";
import { TodoModel } from "./todo.model";

export class TodoService {
  repository: RepositoryInterface<TodoModel>;

  constructor(properties: { repository: RepositoryInterface<TodoModel> }) {
    this.repository = properties.repository;
  }

  async browse(): Promise<TodoModel[]> {
    return this.repository.select();
  }

  async read(id: string): Promise<TodoModel | null> {
    return this.repository.selectById(id);
  }

  async edit(todo: TodoModel): Promise<TodoModel> {
    await this.repository.update(todo);
    return todo;
  }
}