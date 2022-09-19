import { useState, useContext } from "react";
import { TodosContext } from "../TodosContext/TodosContext";

export default function CompletedTodos() {
  const { completedlist, setCompletedlist } = useContext(TodosContext);
  function deleteList() {
    setCompletedlist([]);
    console.log(completedlist);
  }
  return (
    <>
      <h1>Compeleted list</h1>
      <h2>Count:{completedlist.length}</h2>

      <ul>
        {completedlist &&
          completedlist.map((itm, i) => {
            return (
              <div>
                <li key={itm.id}>{itm.item}</li>
              </div>
            );
          })}
      </ul>
      <button onClick={() => deleteList()}>Empty</button>
    </>
  );
}
