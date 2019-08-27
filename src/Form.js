import React, { useState } from "react";

const Form = ({ addTodo }) => {
  const [todo, setTodo] = useState("");
  let [todos, setTodos] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!todo) return;
    console.log(todo);

    setTodo("");
    addTodos();
  };

  const addTodos = () => {
    todos.push(todo);
    // console.log(todos.push(todo));
    console.log(todos);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={e => setTodo(e.currentTarget.value)}
        />
        <button>Sub</button>
      </form>

      {todos.map((todo, idx) => (
        <div key={idx}>Todo: {todo}</div>
      ))}
    </div>
  );
};

export default Form;
