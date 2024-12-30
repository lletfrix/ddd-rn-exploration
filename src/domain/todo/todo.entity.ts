/**
 * Este es la **entidad de dominio** (no la entidad "física" que se guarda en la base de datos).
 */
export type TodoEntity = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}