import React from "react";

const Todo = ({ text, todos, setTodo, todo }) => {
  // Events
  const deleteHandler = () => {
    setTodo(todos.filter((element) => element.id !== todo.id));
  };

  const completeHandler = () => {
    setTodo(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      {/* Todo Text */}
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      {/* Check Button */}
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      {/* Delete Button */}
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
