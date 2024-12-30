import { RepositoryInterface } from "@/src/interfaces/repository.interface";
import { TodoEntity } from "@/src/domain/todo/todo.entity";
import { TodoType } from "./todo.type";

export class TodoRepository implements RepositoryInterface<TodoEntity, TodoType> {
  private todos: TodoType[] = [];

  async select(): Promise<TodoEntity[]> {
    return this.todos.map((todo) => this.toDomain(todo));
  }

  async selectById(id: string): Promise<TodoEntity | null> {
    const todo = this.todos.find((todo) => todo.id === id);
    return todo ? this.toDomain(todo) : null;
  }

  async insert(entity: TodoEntity): Promise<TodoEntity> {
    this.todos.push(this.toPersistence(entity));
    return entity;
  }

  async update(entity: TodoEntity): Promise<TodoEntity> {
    const index = this.todos.findIndex((todo) => todo.id === entity.id);
    this.todos[index] = this.toPersistence(entity);
    return entity;
  }

  async delete(id: string): Promise<void> {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  toDomain(entity: TodoType): TodoEntity {
    return {
      id: entity.id,
      title: entity.title,
      description: entity.description,
      completed: entity.completed,
    };
  }

  toPersistence(domain: TodoEntity): TodoType {
    return {
      id: domain.id,
      title: domain.title,
      description: domain.description,
      completed: domain.completed,
      createdAt: new Date(),
    };
  }
}