import React from "react";
import { useState } from "react";

function Form({ todos, setTodos }) {
  const [form, setForm] = useState("");
  const onChangeForm = (e) => {
    setForm(e.target.value);
  };

  const onSubmitTodo = (e) => {
    e.preventDefault();
    if (form === "") {
      return false;
    }

    setTodos([
      ...todos,
      { text: form, completed: false, id: Math.random() * 1000 },
    ]);
    setForm("");
  };

  return (
    <div>
      <header className="header">
        <h1>to-do-s</h1>
        <form>
          <input
            className="new-todo"
            value={form}
            placeholder="What needs to be done?"
            autoFocus
            onChange={onChangeForm}
          />
          <button onClick={onSubmitTodo}></button>
        </form>
      </header>
    </div>
  );
}

export default Form;
