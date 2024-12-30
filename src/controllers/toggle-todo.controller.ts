import { MainDomain } from "../domain/main.domain";

export class ToggleTodoContoller {
  domain: MainDomain;
  
  constructor(properties: {
    domain: MainDomain;
  }) {
    this.domain = properties.domain;
  };

  async execute(id: string) {
    const todo = await this.domain.todos.read(id);
    if (!todo) {
      throw new Error('Todo not found');
    }
    todo.toggle();
    await this.domain.todos.edit(todo);
    return todo;
  }
}