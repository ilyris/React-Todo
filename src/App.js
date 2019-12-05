import React from 'react';
import ToDoList from './components/TodoComponents/TodoList';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();

    this.state = {
      itemArray: [],
      itemName: ''
    };

  }
  handleChange = (event) => {
    console.log(event.target.value); // works
    console.log(this.state.itemName); // returns empty string

    this.setState({...this.state, itemName: event.target.value})
  }
  addItem = (event) => {
    event.preventDefault();
    const addedItem = {
      id: Date.now(),
      name: this.state.itemName,
      isCompleted: false,
    }

    this.setState( prevState => (
        {itemArray: [...prevState.itemArray, addedItem]
      }));

  }
    toggleItem = (itemId) => {
      this.setState({...this.state.name,
        itemArray: this.state.itemArray.map( items => {
          if(itemId === items.id) {
            return {
              ...items,
              isCompleted: !items.isCompleted
            };
          }
          return items;
        })
      });
    };
    // const clearItem = () => {

    // }
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoList toggleItem={this.toggleItem} itemArray={this.state.itemArray} inputValue={this.state.itemName} handleChange={this.handleChange} addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;
