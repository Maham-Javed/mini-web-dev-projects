import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodo, filteredTodos }) => {
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <Todo
              todo={todo}
              todos={todos}
              setTodo={setTodo}
              key={todo.id}
              text={todo.text}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
