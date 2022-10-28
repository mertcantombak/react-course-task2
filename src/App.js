import "./App.css";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import List from "./components/List";
import Header from "./components/Header";

function App() {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case "active":
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };
    filterHandler();
  }, [todos, status]);

  return (
    <div className="todoapp">
      <Header todos={todos} setTodos={setTodos} />
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <List
            status={status}
            key={todo.id}
            todo={todo}
            text={todo.text}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
      <Footer
        status={status}
        setStatus={setStatus}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
