import React, { Component } from "react";
import axios from "axios";

class TodoForm extends Component {
  state = { title: "", body: "", time: "", date: "" };

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handlePost = async (title, body, time, date) => {
    axios.post("/Todos", { title, body, time, date }).then(response => {
      return response.data;
    });
  };

  render() {
    let { title, body, time, date } = this.state;
    return (
      <div className="formContainer">
        <form>
          <div>
            <label htmlFor="title">Title</label>
            <br />
            <input onChange={this.handleInput} name="title" type="text" />
          </div>
          <div>
            <label htmlFor="body">Body</label>
            <br />
            <textarea
              onChange={this.handleInput}
              style={{ width: "400px", height: "100px" }}
              name="body"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="time">Time</label>
            <input onChange={this.handleInput} name="time" type="time" />
            <label htmlFor="date">Date</label>
            <input onChange={this.handleInput} name="date" type="date" />
          </div>
          <div>
            <button
              id="submitButton"
              name="Submit"
              onClick={() => this.handlePost(title, body, time, date)}
            >
              Submit
            </button>
            <button id="cancelButton" type="reset" name="Cancel">
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default TodoForm;
