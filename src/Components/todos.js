import React, { Component } from "react";
import axios from "axios";
import "../main.css";
import TodoCard from "./TodoCard";

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [], toggle: false };
  }

  async componentDidMount() {
    await axios.get("/Todos").then(response => {
      this.setState({ todos: response.data });
    });
  }

  handleDelete = id => {
    axios.delete(`/Todos/${id}`).then(response => {
      return response.data;
    });
  };

  handleEdit = id => {
    axios.put(`/Todos/${id}`).then(response => {
      return response.data;
    });
  };

  // toggleEdit = () =>
  //   this.setState(
  //     ({ toggle }) => ({ toggle: !toggle }),
  //     () => this.props.onToggle(this.state.toggle)
  //   );

  render() {
    let { todos } = this.state;
    let { handleDelete, handleEdit, toggleEdit } = this;
    return (
      <>
        {todos.map((todo, i) => {
          return (
            <TodoCard
              key={i}
              todo={todo}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              // toggleEdit={toggleEdit}
            />
          );
        })}
      </>
    );
  }
}

export default Todos;
