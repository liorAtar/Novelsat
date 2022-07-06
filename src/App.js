import React, {useState} from 'react';
// import ToDoItem from './Components/ToDoItem';
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
      <ToDoList todoList={todoList} setTodoList={setTodoList}/>
    </div>
  );
}

export default App;
