import { useState, useContext } from "react";
import { TodosContext } from "../TodosContext/TodosContext";
import "./CompletedTodos.css";

export default function CompletedTodos() {
  const { completedlist, setCompletedlist } = useContext(TodosContext);
  function deleteList() {
    setCompletedlist([]);
    console.log(completedlist);
  }
  return (
    <div className="completed_container">
      <h1>Compeleted list</h1>
      <h2>Count:{completedlist.length}</h2>

      <ul className="completed_ul">
        {completedlist &&
          completedlist.map((itm, i) => {
            return (
              <div className="completed_div">
                {" "}
                <li className="completed_li" key={itm.id}>{itm.item}</li>
              </div>

            );
          })}
                          <button className="emptybtn" onClick={() => deleteList()}>Empty</button>

      </ul>
    </div>
  );
}
