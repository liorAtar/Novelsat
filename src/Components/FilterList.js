import React, { useEffect, useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const FilterList = ({ todoList, setFilteredList }) => {

    const [filter, setFilter] = useState('All');

    useEffect(() => {
        checkFilterValue(filter);
    }, [todoList]);

    const handleFilterChanged = (e) => {
        setFilter(e.target.value);
        checkFilterValue(e.target.value);
    }

    const checkFilterValue = (filterValue) => {
        if (filterValue === 'All') {
            filterAll();
        } else if (filterValue === 'Completed') {
            filterCompleted();
        } else {
            filterUncompleted();
        }
    }

    const filterAll = () => {
        setFilteredList(todoList);
    }

    const filterCompleted = () => {
        let completedFilteredList = todoList.filter(todo =>
            todo.isCompleted === true
        );

        setFilteredList(completedFilteredList);
    }

    const filterUncompleted = () => {
        let uncompletedFilteredList = todoList.filter(todo =>
            todo.isCompleted === false
        );

        setFilteredList(uncompletedFilteredList);
    }

    return (
        <div style={{ margin: '20px' }}>
            <FormControl fullWidth>
                <InputLabel>filter</InputLabel>
                <Select
                    value={filter}
                    label="Filter"
                    onChange={handleFilterChanged}
                >
                    <MenuItem value={'All'}>All</MenuItem>
                    <MenuItem value={'Completed'}>Completed</MenuItem>
                    <MenuItem value={'Uncompleted'}>Uncompleted</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}

export default FilterList; 