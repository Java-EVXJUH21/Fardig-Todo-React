import './App.css';
import { useState } from 'react';
import { TodoInfoView } from './views/TodoInfoView';
import { TodoListView } from './views/TodoListView';
import { TodoCreateView } from './views/TodoCreateView';
import { useRecoilState, useRecoilValue } from 'recoil';
import { todoListState, viewState } from './state';
import { Routes, Route } from 'react-router-dom';

function App() {
  let [todos, setTodos] = useRecoilState(todoListState);

  const removeTodo = todo => {
    setTodos(todos.filter(all => all.id !== todo.id));
  }

  const createTodo = description => {
    let id = todos.length;
    let todo = {
      id,
      description,
      completed: false,
      completedDate: null,
      createdDate: new Date(),
    }
    setTodos([...todos, todo]);
  }

  const updateTodo = todo => {
    setTodos(todos.map(all => {
      if (all.id !== todo.id) 
        return all;

      return todo;
    }));
  }

  return (
      <div className="App">
      <Routes>
        <Route path="/" element={<TodoListView removeTodo={removeTodo} />}/>
        <Route path="/info/:id" element={<TodoInfoView updateTodo={updateTodo} />}/>
        <Route path="/create" element={<TodoCreateView createTodo={createTodo} />}/>
      </Routes>
      </div>
  );
}

export default App;
