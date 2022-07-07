import React, { useState } from "react";
import { AiOutlineEdit } from "@react-icons/all-files/ai/AiOutlineEdit";
import { AiOutlineDelete } from "@react-icons/all-files/ai/AiOutlineDelete";
import { AiOutlineFileDone } from "@react-icons/all-files/ai/AiOutlineFileDone";
import { AiOutlineEllipsis } from "@react-icons/all-files/ai/AiOutlineEllipsis";
import { AiFillCloseCircle } from "@react-icons/all-files/ai/AiFillCloseCircle";
import "./TodoItem.css";

function TodoItem(props) {
  const properties = {
    text: props.text,
    id: props.id,
  };
  const [isCompleted, setIsCompleted] = useState(false);
  const [showIcons, setShowIcons] = useState(false);

  return (
    <div key={props.id} className={isCompleted ? "item completed" : "item"}>
      <p className="todo-text">{props.text}</p>
      <div>
        {!showIcons && (
          <AiOutlineEllipsis
            className="show-icons"
            onClick={() => {
              setShowIcons(true);
            }}
          />
        )}
        {showIcons && (
          <div className="icons">
            <div className="icons-container">
              <AiFillCloseCircle
                className="icon-menu"
                onClick={() => setShowIcons(false)}
              />
            </div>
            <div className="icons-container">
              <AiOutlineEdit
                className="icon-menu"
                onClick={() => {
                  props.onEdit(properties);
                  setShowIcons(false);
                }}
              />
            </div>
            <div className="icons-container">
              <AiOutlineDelete
                className="icon-menu"
                onClick={() => {
                  props.onDelete(properties);
                  setShowIcons(false);
                }}
              />
            </div>
            <div className="icons-container">
              <AiOutlineFileDone
                className="icon-menu"
                onClick={() => {
                  setIsCompleted((prev) => !prev);
                  setShowIcons(false);
                }}
              />
            </div>
          </div>
        )}
      </div>
      <div className="clock">
        <p>
          {props.date} || {props.hours}
        </p>
      </div>
    </div>
  );
}

export default TodoItem;
