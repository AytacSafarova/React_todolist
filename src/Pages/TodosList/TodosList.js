import { useContext, useState } from "react";
import { TodosContext } from "../TodosContext/TodosContext";
import "./TodosList.css";

export default function TodosList() {
  const { list, setList } = useContext(TodosContext);
  const { completedlist, setCompletedlist } = useContext(TodosContext);
  function checkCompleted(item) {
    setCompletedlist([...completedlist, item]);
    console.log(completedlist);
  }

  return (
    <>
      <h1>List</h1>
      <ul>
        {list &&
          list.map((item, key) => {
            return (
              <div className="todos_list" key={key}>
                <li>{item}</li>
                <input
                  type="checkbox"
                  onClick={() => checkCompleted({ item })}
                ></input>
              </div>
            );
          })}
      </ul>
    </>
  );
}
