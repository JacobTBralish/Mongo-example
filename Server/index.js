const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const todo = require("./TodoController");
mongoose.Promise = global.Promise;

const mongoURL = "mongodb://localhost:27017/mongoTestTodoList";
const connect = () => {
  return mongoose.connect(
    mongoURL,
    { useNewUrlParser: true }
  );
};

let db = mongoose.connection;

db.once("open", () => console.log("Connected to the database"));
db.on("error", console.error.bind(console, "Mongo connection error: "));
app.use(bodyParser.json());

app.get("/Todos", todo.getTodos);
app.post("/Todos", todo.postTodo);
app.delete("/Todos/:id", todo.deleteTodo);

const PORT = 4500;

// app.set("db", database);
connect().then(() => {
  app.listen(PORT, () => console.log(`Server listening on port ${PORT}🏄`));
});
