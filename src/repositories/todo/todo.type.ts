// This should match the database schema / the DTO of the server's API

export type TodoType = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
}