import React, { useState } from "react";

const Todo = ({ todo, idx, completedTodo }) => {
  return (
    <div
      className="task"
      style={{ textDecoration: todo.completed ? "line-through" : "" }}
    >
      {todo.title}
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
  const [todos, setTodos] = useState([
    {
      title: "Grab some Pizza",
      completed: true
    },
    {
      title: "Do your workout",
      completed: true
    },
    {
      title: "Hangout with friends",
      completed: false
    }
  ]);

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
