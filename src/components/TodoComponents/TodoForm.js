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
          <form>
              
          </form>  
        )
    }
}

export default TodoForm;