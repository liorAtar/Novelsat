import React from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import ListItem from '@mui/material/ListItem';

const ToDoItem = () => {
    return (
        <ListItem
            style={{
                backgroundColor: 'aliceblue',
            }}
            secondaryAction={
                <div>
                    <Checkbox />
                    <IconButton aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </div>
            }
        >
            <p style={{ color: 'darkslategray'}}>Clean my room</p>
        </ListItem>
    );
}

export default ToDoItem;