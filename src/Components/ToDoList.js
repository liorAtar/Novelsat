import React from "react";
import List from '@mui/material/List';
import ToDoItem from "./ToDoItem";

const ToDoList = ({ todoList, setTodoList }) => {
    
    /**
     * Delete the requested todo item
     * @param {*} todoItem 
     */
    const deleteItem = (todoItem) => {
        const updatedList = todoList.filter(
            item => item.id !== todoItem.id
        );
        setTodoList(updatedList);
    }

    /**
     * Change the requested todo item is completed
     * @param {*} e 
     * @param {*} todoItem 
     */
    const handleIsCompletedChanged = (e, todoItem) => {
        const itemToUpdateIndex = todoList.findIndex(
            item => item.id === todoItem.id
        );

        const updatedList = todoList;
        updatedList[itemToUpdateIndex].isCompleted = e.target.checked;

        setTodoList(updatedList);
    }

    return (
        <List>
            {todoList.map(todoItem =>
                <ToDoItem
                    key={todoItem.id}
                    todoItem={todoItem}
                    deleteItem={deleteItem}
                    handleIsCompletedChanged={handleIsCompletedChanged}
                />
            )}
        </List>
    );
}

export default ToDoList;