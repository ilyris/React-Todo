// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import ToDoForm from './TodoForm.js';
import ToDo from './Todo';

const ToDoList = (props) => {
    return(
        <div>
            {props.itemArray && props.itemArray.map( (items) => {
                return <ToDo item={items} isCompleted={items.isCompleted} toggleItem={props.toggleItem}/>
            })}
            <ToDoForm inputValue={props.inputValue} handleChange={props.handleChange} addItem={props.addItem}/>
        </div>
    );
}
export default ToDoList;
