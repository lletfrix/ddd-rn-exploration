import { ListTodosController } from "@/src/controllers/list-todos.controller";
import { ToggleTodoContoller } from "@/src/controllers/toggle-todo.controller";
import { MainDomain } from "@/src/domain/main.domain";
import { MainRepository } from "@/src/repositories/main.repository";
import { useRef } from "react";
import { Button, Text, View } from "react-native";

export default function Index() {
  const domain = useRef(new MainDomain({
    repository: new MainRepository(),
  }));
  
  const listTodos = new ListTodosController({domain: domain.current});
  const toggleTodo = new ToggleTodoContoller({domain: domain.current});
  
  function listPress () {
    listTodos.execute().then((todos) => {
      console.log(todos);
    });
  }

  async function togglePress ({ id }:{ id: string }) {
    try {
      const todo = await toggleTodo.execute(id);
      console.log('After toggle', todo);
      const todos = await listTodos.execute();
      console.log('Listed', todos);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Button title="List Todos" onPress={listPress} />
      <Button title="Toggle Todo" onPress={() => togglePress({ id: '1'})} />
    </View>
  );
}
