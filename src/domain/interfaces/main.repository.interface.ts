import { RepositoryInterface } from "@/src/interfaces/repository.interface";
import { TodoEntity } from "../todo/todo.entity";

export interface MainRepositoryInterface {
  todo: RepositoryInterface<TodoEntity>;
}