import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import '../Css/CreateToDoItemStyle.css';

const CreateToDoItem = ({ todoList, setTodoList }) => {

    const [textValue, setTextValue] = useState("");

    const createNewTodo = () => {
        if (textValue !== "") {
            const newTodo = {
                id: (todoList[todoList.length - 1].id + 1),
                task: textValue,
                isCompleted: false
            }
            setTodoList(prev => [...prev, newTodo]);  
            setTextValue("");
        } else {
            alert("To Do is empty!")
        }
    }

    return (
        <div className="create-div">
            <TextField
                label="To Do"
                variant="outlined"
                className="task-text"
                value={textValue}
                onChange={(e) => setTextValue(e.target.value)}
            />
            <Button
                variant="contained"
                endIcon={<AddIcon />}
                onClick={createNewTodo}
            >
                Create
            </Button>
        </div>
    );
}

export default CreateToDoItem;