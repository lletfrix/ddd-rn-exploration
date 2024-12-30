import { RepositoryInterface } from "@/src/interfaces/repository.interface";
import { TodoModel } from "../todo/todo.model";

export interface MainRepositoryInterface {
  todo: RepositoryInterface<TodoModel>;
}