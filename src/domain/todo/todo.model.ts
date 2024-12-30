import { TodoEntity } from "./todo.entity";

/**
 * Representa un objeto de tipo Todo dentro del dominio "To Do".
 * Es decir, para cada lógica de negocio que se maneje dentro del dominio "To Do",
 * el objeto Todo será una instancia de esta clase.
 */
export class TodoModel {
  entity: TodoEntity;

  constructor(entity: TodoEntity) {
    this.entity = entity;
  }

  async toggle() {
    this.entity.completed = !this.entity.completed;
    return this;
  }
}