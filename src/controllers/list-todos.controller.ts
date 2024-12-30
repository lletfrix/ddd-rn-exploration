import { MainDomain } from "../domain/main.domain";

export class ListTodosController {
  domain: MainDomain;
    
    constructor(properties: {
      domain: MainDomain;
    }) {
      this.domain = properties.domain;
    };
  
    async execute() {
      return (await this.domain.todos.browse()).map(todo => todo.public());
    }
} 