import React, {useState} from 'react';
// import ToDoItem from './Components/ToDoItem';
import CreateToDoItem from './Components/CreateToDoItem';
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

  return (
    <div className="App">
      <CreateToDoItem todoList={todoList} setTodoList={setTodoList}/>
      <ToDoList todoList={todoList} setTodoList={setTodoList}/>
    </div>
  );
}

export default App;
