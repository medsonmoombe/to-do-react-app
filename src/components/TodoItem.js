import React from 'react';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';
import styles from './TodoItem.module.css';

class TodoItem extends React.PureComponent {
  render() {
    const { todo, handleChangeProps, deleteTodoProps } = this.props;
    return (
      <li className={styles.item}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={todo.completed}
          onChange={() => handleChangeProps(todo.id)}
        />
        <button type="button" onClick={() => deleteTodoProps(todo.id)}>
          <FaTrash style={{ color: 'orangered', fontSize: '16px' }} />
        </button>
        {todo.title}
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.shape(
    {
      id: PropTypes.number,
      completed: PropTypes.bool,
      title: PropTypes.string,
    },
  ).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
};

export default TodoItem;
