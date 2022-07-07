import React, { useState } from "react";
import "./App.css";
import Todos from "./components/Todos";
import { AiOutlineBars } from "@react-icons/all-files/ai/AiOutlineBars";
const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputEditValue, setInputEditValue] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [todos, setTodos] = useState([]);
  const [updatedId, setUpdatedId] = useState(null);

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const submitAddHandler = (e) => {
    e.preventDefault();
    if (inputValue === "") {
      return;
    }
    setTodos((prev) => [
      { text: inputValue, id: Math.floor(Math.random() * 1000) },
      ...prev,
    ]);
    setInputValue("");
  };

  const deleteHandler = (todoData) => {
    setTodos((prev) => {
      return prev.filter((todo) => {
        return todo.id !== todoData.id;
      });
    });
  };

  const editHandler = (todoData) => {
    setIsEdit(true);
    setInputEditValue(todoData.text);
    setUpdatedId(todoData.id);
  };

  const changeEditHandler = (e) => {
    setInputEditValue(e.target.value);
  };

  const submitUpdateHandler = (e) => {
    e.preventDefault();
    let updatedTodo = todos.find((todo) => todo.id === updatedId);
    updatedTodo = { ...updatedTodo, text: inputEditValue };
    if (inputEditValue === "") {
      setIsEdit(false);
      return;
    }
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === updatedId) {
          return { ...todo, text: inputEditValue };
        } else return todo;
      });
    });
    setIsEdit(false);
  };

  const NoItemsFound = (
    <div className="no-items">
      <h1>No Items Found</h1>
    </div>
  );

  return (
    <div>
      <h1 className="title">TO DO LIST</h1>
      <div className="app">
        {!isEdit && (
          <form onSubmit={submitAddHandler}>
            <AiOutlineBars className="input-icon" />
            <input
              type="text"
              placeholder="Enter your task"
              value={inputValue}
              onChange={changeHandler}
              className="input"
            />
            <button>ADD</button>
          </form>
        )}
        {isEdit && (
          <form onSubmit={submitUpdateHandler}>
            <AiOutlineBars className="input-icon" />
            <input
              className="input"
              type="text"
              placeholder="Enter edited task"
              value={inputEditValue}
              onChange={changeEditHandler}
            />
            <button>UPDATE</button>
          </form>
        )}
        {todos.length === 0 ? (
          NoItemsFound
        ) : (
          <Todos todos={todos} onDelete={deleteHandler} onEdit={editHandler} />
        )}
      </div>
    </div>
  );
};

export default App;
