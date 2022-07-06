import React, {useState} from 'react';
import CreateToDoItem from './Components/CreateToDoItem';
import FilterList from './Components/FilterList';
import ToDoList from './Components/ToDoList';
import './App.css';

const App = () => {

  const [todoList, setTodoList] = useState([
    {
      id: 1,
      task: "Clean my room",
      isCompleted: false
    },
    {
      id: 2,
      task: "Shopping",
      isCompleted: true
    }
  ]);

  const [filteredList, setFilteredList] = useState(todoList);

  return (
    <div className="App">
      <CreateToDoItem todoList={todoList} setTodoList={setTodoList} />
      <FilterList todoList={todoList} setFilteredList={setFilteredList}/>
      <ToDoList todoList={todoList} filteredList={filteredList} setTodoList={setTodoList}/>
    </div>
  );
}

export default App;
