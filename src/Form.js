import React, { useState } from "react";

const Form = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    setTodo("");
    console.log(todo);
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
    </div>
  );
};

export default Form;
