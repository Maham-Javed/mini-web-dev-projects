import React from "react";

const Form = ({ todos, setTodo, inputText, setInputText, setStatus }) => {
  const InputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submithandler = (e) => {
    e.preventDefault();
    setTodo([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div>
      <form>
        <input
          value={inputText}
          onChange={InputTextHandler}
          type="text"
          className="todo-input"
        />
        <button onClick={submithandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Form;
