import React from "react";

const TodoCard = ({ todo, handleDelete, handleEdit, onToggle }) => {
  //   onToggle = (...args) => console.log("onToggle", ...args);
  TODO: return (
    <div className="todoContainer">
      <div className="todoTitleContainer">
        <h2>{todo.title}</h2>
      </div>
      <span className="todoTimeContainer">
        <p>Time: {todo.time}</p>
        <p>Date: {todo.date}</p>
      </span>
      <div className="todoBodyContainer">
        <p>{todo.body}</p>
      </div>
      <div className="buttonCluster">
        TODO:
        <button onClick={() => handleEdit()} id="editButton">
          Edit
        </button>
        <button onClick={() => handleDelete(todo._id)} id="deleteButton">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
