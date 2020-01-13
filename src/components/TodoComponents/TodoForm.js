import React from 'react';

class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            todoText: ''
        };
    }

    handleChanges = e => {
        this.setState({
            todoText: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state.todoText);
    };

    render() {
        return (
          <form onSubmit={this.handleSubmit}>
              <input
              type="text"
              name="item"
              value={this.state.todoText}
              onChange={this.handleChanges}
              />
              <button>Add Item</button>
          </form>  
        );
    }
}

export default TodoForm;