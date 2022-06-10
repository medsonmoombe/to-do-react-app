/* eslint-disable react/prop-types */
import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';

class InputTodo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title } = this.state;
    const { addTodoProps } = this.props;
    if (title.trim()) {
      addTodoProps(title);
      this.setState({
        title: '',
      });
    } else {
      // eslint-disable-next-line no-alert
      alert('Please write item');
    }
  };

  render() {
    const { title } = this.state;
    return (
      <>
        <form className="form-container" onSubmit={this.hamdleSubmit}>
          <input type="text" name="title" className="input-text" placeholder="Add Todo..." value={title} onChange={this.onChange} />
          <button type="button" className="input-submit">
            <FaPlusCircle color="darkcyan" size="20px" className="submit-icon" />
          </button>
        </form>
      </>
    );
  }
}

export default InputTodo;
