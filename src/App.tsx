import { useState } from "react";
import * as C from "./App.styles";
import { Item } from "./types/Item";

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Comprar o pão na padaria", done: false },
    { id: 2, name: "Comprar bolo na padaria", done: false },
  ]);
  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        {/* Área de adicionar uma nova tarefa */}
        {list.map((item, index) => (
          <div>{item.name}</div>
        ))}

        {/* Lista de tarefas */}
      </C.Area>
    </C.Container>
  );
};

export default App;
