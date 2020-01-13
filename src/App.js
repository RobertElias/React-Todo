import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'


const todo = [
  {
    name: 'Finish ToDo App',
    id: 123,
    completed: false

  }
 ]
class App extends Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state ={
      todoList: todo,
      nextTodo: '',
      show: true
    }
  }
  toggleItem = id => {
    // find the item we clicked on
    // toggle the completed field
    // update state with the new list data
    const newTodoList = this.state.todoList.map(item => {
      if (item.id === id) {
        return {
          ...item,
          purchased: !item.purchased
        };
      } else {
        return item;
      }
    });
    // update groceryList
    this.setState({
      todoList: newTodoList
    });
  };

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
          <div className="header">
        <h2>Welcome to your Todo App!</h2>
        {/* TodoForm component */}
      </div>
      {/* TodoList component */}
      </div>
     
    );
  }
}

export default App;
