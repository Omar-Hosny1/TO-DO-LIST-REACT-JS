import React from "react";
import TodoItem from "./TodoItem";

function Todos(props) {
  let a = new Date();

  const Todos = props.todos.map((todo) => (
    <TodoItem
      text={todo.text}
      id={todo.id}
      key={todo.id}
      date={new Date().toJSON().slice(0, 10).replace(/-/g, "/")}
      hours={
        a.getHours() > 12
          ? `${a.getHours() % 12} pm`
          : `${a.getHours() % 12} am`
      }
      onDelete={props.onDelete}
      onEdit={props.onEdit}
    />
  ));
  return <div>{Todos}</div>;
}

export default Todos;
