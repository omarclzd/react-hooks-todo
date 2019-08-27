import React, { useState } from "react";

const Todo = ({ todo, idx, completedTodo, delTodo }) => {
  return (
    <div
      className="task"
      style={{ textDecoration: todo.completed ? "line-through" : "" }}
    >
      {todo.title}

      <button onClick={() => delTodo(idx)}>X</button>
      <button onClick={() => completedTodo(idx)}>Done</button>
    </div>
  );
};

const CreateTodo = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!todo) return;
    console.log(todo);
    addTodo(todo);

    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        placeholder="Add new todo!"
        onChange={e => setTodo(e.currentTarget.value)}
      />
      <button>Sub</button>
    </form>
  );
};

const Todos = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = title => {
    const newTodos = [...todos, { title, completed: false }];
    setTodos(newTodos);
  };

  const completedTodo = idx => {
    const newTodos = [...todos];
    console.log(newTodos[idx]);
    newTodos[idx].completed = true;
    setTodos(newTodos);
  };

  const delTodo = idx => {
    const newTodos = [...todos];
    newTodos.splice(idx, 1);
    // console.log(newTodos[idx]);
    setTodos(newTodos);
  };

  return (
    <div>
      <div className="todo-container">
        <div className="header">Todo - Items</div>
        <div className="tasks">
          {todos.map((todo, idx) => (
            <Todo
              todo={todo}
              idx={idx}
              completedTodo={completedTodo}
              delTodo={delTodo}
              key={idx}
            />
          ))}
        </div>
        <div className="create-task">
          <CreateTodo addTodo={addTodo} />
        </div>
      </div>
    </div>
  );
};

export default Todos;
