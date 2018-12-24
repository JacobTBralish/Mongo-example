const Todo = require("./Schema/todo");

module.exports = {
  getTodos: async (req, res, next) => {
    const todosList = await Todo.find({})
      .lean()
      .exec();
    res.status(200).json(todosList);
    next();
  },

  postTodo: async (req, res) => {
    const createdTodo = req.body;
    console.log("createdTodo: ", createdTodo);
    try {
      const todo = await Todo.create(createdTodo);
      res.status(201).json(todo);
    } catch (error) {
      res.status(500).send();
      console.log(error);
    }
  },

  deleteTodo: async (req, res, next) => {
    let { id } = req.params;

    try {
      const removed = await Todo.findByIdAndDelete(id).exec();
      res.status(200).json(removed);
    } catch (e) {
      res.status(500).json();
    }
    next();
  }
};
