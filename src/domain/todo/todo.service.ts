import { RepositoryInterface } from "@/src/interfaces/repository.interface";
import { TodoModel } from "./todo.model";
import { TodoEntity } from "./todo.entity";

export class TodoService {
  repository: RepositoryInterface<TodoEntity>;

  constructor(properties: { repository: RepositoryInterface<TodoEntity> }) {
    this.repository = properties.repository;
  }

  async browse(): Promise<TodoModel[]> {
    return (await this.repository.select()).map(todo => new TodoModel(todo));
  }

  async read(id: string): Promise<TodoModel | null> {
    const todo = await this.repository.selectById(id);
    return todo ? new TodoModel(todo) : null;
  }

  async edit(todo: TodoModel): Promise<TodoModel> {
    await this.repository.update(todo.entity);
    return todo;
  }
}