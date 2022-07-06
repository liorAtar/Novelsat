import React from "react";
import List from '@mui/material/List';
import ToDoItem from "./ToDoItem";

const ToDoList = ({ todoList, setTodoList, filteredList }) => {
    
    /**
     * Delete the requested todo item
     * @param {*} todoItem 
     */
    const deleteItem = (todoItem) => {
        let updatedList = todoList.filter(
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
        let itemToUpdateIndex = todoList.findIndex(
            item => item.id === todoItem.id
        );

        let newList = [...todoList];
        newList[itemToUpdateIndex].isCompleted = e.target.checked;

        setTodoList(newList);
    }

    return (
        <List>
            {filteredList.map(todoItem =>
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