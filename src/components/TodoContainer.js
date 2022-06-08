/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */


import React from 'react';

import Header from './Header';
import InputTodo from './InputTodo';
import TodoList from './TodoList';

class TodoContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then((response) => response.json())
      .then((data) => this.setState({ todos: data }));
  }

  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  delTodo = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: [
        ...todos.filter((todo) => todo.id !== id),
      ],
    });
  };

  addTodoItem = (title) => {
    const newTodo = {
      id: 4,
      title,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <>
        <div className="container">
          <div className="inner">
            <Header />
            <InputTodo />
            <TodoList
              todos={todos}
              handleChangeProps={this.handleChange}
              deleteTodoProps={this.delTodo}
            />
          </div>
        </div>
      </>
    );
  }
}

export default TodoContainer;