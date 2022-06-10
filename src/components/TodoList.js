import React from 'react';
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';

class TodoList extends React.PureComponent {
  render() {
    const { todos, handleChangeProps, deleteTodoProps } = this.props;
    return (
      <>
        <ul>
          {
            todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                handleChangeProps={handleChangeProps}
                deleteTodoProps={deleteTodoProps}
              />
            ))
          }
        </ul>
      </>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.shape(
    [
      {
        id: PropTypes.number,
        completed: PropTypes.bool,
        title: PropTypes.string,
        map: PropTypes.func,
      },
    ],
  ).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
};

export default TodoList;
