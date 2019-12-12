
import React, { Component } from 'react';
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


  render() {
    return (
      <div className='todosContainer'>
        <Todos todos={this.state.todos} />
      </div>
    );
  };
};

export default TodosContainer;

