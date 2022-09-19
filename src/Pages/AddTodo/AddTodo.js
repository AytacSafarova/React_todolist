import { useContext, useState } from "react";
import { TodosContext } from "../TodosContext/TodosContext";

export default function AddTodo() {
  const {list, setList} = useContext(TodosContext);
  const [newtodos, setNewtodos] = useState([]);

  const addTodos = () => {
    setList([...list, newtodos ])
    console.log(list)
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <input onChange={(e)=>setNewtodos(e.target.value)}></input>
        <button onClick={() => addTodos()}>Add</button>
      </div>
    </>
  );
}
