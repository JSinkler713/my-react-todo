import React, { Component } from 'react';
import CreateTodoForm from '../components/CreateTodoForm.js'
import TodoModel from '../models/Todo';
import Todos from '../components/Todos';


class TodosContainer extends Component {
  state = {
    todos: []
  };
  

  componentDidMount() {
    this.fetchData();
  };

  fetchData = () => {
    TodoModel.all().then((res) => {
      console.log("MEOW", res.todos)
      this.setState({ todos: res.todos });
    });
  };

  //passing state up the component from below in the CreateTodoForm
  createTodo = (todo) => {
    let newTodo = {
      body: todo,
      completed: false
    };

    TodoModel.create(newTodo).then((res)=> {
      let todos = this.state.todos;
      todos.push(res);
      this.setState({ todos: todos });
    });
  };

  render() {
    return (
      <div className='todosComponent'>
        <CreateTodoForm
          createTodo={this.createTodo} />

        <Todos todos={this.state.todos} />
      </div>
    );
  };
};

export default TodosContainer;

