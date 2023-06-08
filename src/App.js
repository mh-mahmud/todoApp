import React, {useState} from 'react';
import "./App.css";
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [listTodo, setListTodo] = useState("");
  let addList = (inputText) => {
    setListTodo([...listTodo, inputText]);
  }
  const deleteListTodo = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo(newListTodo);
  }

  return(
    <div className='main-container'>
      <div className='center-container'>
        <TodoInput addList={addList} />
        <h1 className='app-heading'>TODO</h1>
        <hr />
        {Array.isArray(listTodo) ? listTodo.map((itemList, index) => {
          return (
            <TodoList key={index} index={index} item={itemList} deleteItem={deleteListTodo} />
          )
        }) : null}
        <TodoList />
      </div>
    </div>
  );
}

export default App;