
import "../src/App.css";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import TodosList from "./Pages/TodosList/TodosList";
import AddTodo from "./Pages/AddTodo/AddTodo";
import CompletedTodos from "./Pages/CompletedTodos/CompletedTodos";
import { TodosContext } from "./Pages/TodosContext/TodosContext";
import { TodosProvider } from "./Pages/TodosContext/TodosContext";

function App() {
  return (
    <TodosProvider>
      <nav>
        <ul>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/list">
              List
            </Link>
          </li>
          <li>
            <Link className="link" to="/add">
              Add
            </Link>
          </li>
          <li>
            <Link className="link" to="/completed">
              Completed
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/list" element={<TodosList />} />
        <Route path="/add" element={<AddTodo />} />
        <Route path="/completed" element={<CompletedTodos />} />
      </Routes>
      </TodosProvider>
  );
}

export default App;
