import React, { createContext, useContext, useState } from "react";
export const TodosContext = createContext(null);

export const TodosProvider = ({ children }) => {
  const [list, setList] = useState([]);
  const [completedlist, setCompletedlist] = useState([]);

  const values = {
    list,
    setList,
    completedlist,
    setCompletedlist,
  };
  return (
    <TodosContext.Provider value={values}>{children}</TodosContext.Provider>
  );
};
