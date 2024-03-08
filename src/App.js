import React, { useState, useEffect } from "react";
import "./App.css";

// importing components:
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  // States
  const [todos, setTodo] = useState([]);
  const [inputText, setInputText] = useState("");
  const [status, setStatus] = useState("all");
  const [filteredTodos, setfilteredTodos] = useState([]);

  // useEffect
  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setfilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setfilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setfilteredTodos(todos);
    }
  };

  // Save todo to the local storage
  const saveLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify(todos));
    } else {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify(todos));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodo(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Daily Todo's</h1>
      </header>
      <Form
        todos={todos}
        setTodo={setTodo}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList todos={todos} setTodo={setTodo} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
