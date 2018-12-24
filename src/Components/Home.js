import React from "react";
import TodoForm from "./TodoForm";
import TodosList from "./todos";

const Home = () => {
  return (
    <div>
      <div
        style={{
          margin: "50px auto 0 auto",
          textDecoration: "underline",
          fontSize: "30px",
          color: "tomato"
        }}
      >
        <h1>ToDo List</h1>
      </div>
      <div>
        <TodoForm />
      </div>
      <div>
        <TodosList />
      </div>
    </div>
  );
};

export default Home;
