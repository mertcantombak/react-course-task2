import React from "react";

function Footer({ todos, setTodos, status, setStatus }) {
  const unCompleted = todos.filter((todo) => todo.completed === false);
  const completed = todos.filter((todo) => todo.completed === true);

  const clearCompleted = (e) => {
    e.preventDefault();
    setTodos(todos.filter((todo) => todo.completed === false));
  };

  const clickStyle = (e) => {
    setStatus(e.target.id);
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{unCompleted.length} </strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <button
            onClick={clickStyle}
            className={status === "all" ? "selected" : ""}
            id="all"
          >
            All
          </button>
        </li>
        <li>
          <button
            onClick={clickStyle}
            className={status === "active" ? "selected" : ""}
            id="active"
          >
            Active
          </button>
        </li>
        <li>
          <button
            onClick={clickStyle}
            className={status === "completed" ? "selected" : ""}
            id="completed"
          >
            Completed
          </button>
        </li>
      </ul>

      {/* <!-- Hidden if no completed items are left ↓ --> */}
      <button
        className={completed === 0 ? "hidden" : "clear-completed"}
        onClick={clearCompleted}
      >
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
