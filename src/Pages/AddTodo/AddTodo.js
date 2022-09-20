import { useContext, useState } from "react";
import { TodosContext } from "../TodosContext/TodosContext";
import "./AddTodo.css"

export default function AddTodo() {
  const {list, setList} = useContext(TodosContext);
  const [newtodos, setNewtodos] = useState([]);

  const addTodos = () => {
    setList([...list, newtodos ])
    console.log(list)
  };

  return (
    <>
      <div className="add_div">
        <input onChange={(e)=>setNewtodos(e.target.value)}></input>
        <button className="addbtn" onClick={() => addTodos()}>Add</button>
      </div>
    </>
  );
}
