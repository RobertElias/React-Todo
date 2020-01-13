import React, {Component} from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'
import './components/TodoComponents/Todo.css';
const todo = [
  {
    name: 'Finish ToDo App',
    id: 123,
    completed: false

  }
 ];
class App extends Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state ={
      todoList: todo,
      anotherTodo: '',
      life: 42
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
          completed: !item.completed
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

  addItem = itemName => {
    const newItem = {
      name: itemName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoList: [...this.state.todoList, newItem]
    });
  };

  clearList = e => {
    e.preventDefault();
    this.setState({
      todoList: this.state.todoList.filter(todo => todo.completed !== true)
    })
  }

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
          <div className="header">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem} />
      </div>
      <TodoList
          todo={this.state.todoList}
          toggleItem={this.toggleItem}
          clearList={this.clearList}
        />
      </div>
     
    );
  }
}

export default App;
