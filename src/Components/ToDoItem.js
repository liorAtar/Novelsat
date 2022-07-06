import React, {useState} from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import ListItem from '@mui/material/ListItem';
import '../Css/ToDoItemStyle.css';

const ToDoItem = ({ todoItem, deleteItem, handleIsCompletedChanged }) => {
    
    const [isChecked, setIsChecked] = useState(todoItem.isCompleted);

    return (
        <ListItem className="listItem"
            secondaryAction={
                <div>
                    <Checkbox
                        checked={isChecked}
                        onChange={(e) => {
                            handleIsCompletedChanged(e, todoItem);
                            setIsChecked(e.target.checked);
                            }
                        }
                    />
                    <IconButton
                        aria-label="delete"
                        onClick={() => deleteItem(todoItem)}
                    >
                        <DeleteIcon />
                    </IconButton>
                </div>
            }
        >
            <p className="task-p">{todoItem.task}</p>
        </ListItem>
    );
}

export default ToDoItem;