import './App.css';
import { useEffect, useState } from 'react';
import { TodoInfoView } from './views/TodoInfoView';
import { TodoListView } from './views/TodoListView';
import { TodoCreateView } from './views/TodoCreateView';
import { useRecoilState, useRecoilValue } from 'recoil';
import { todoListState, viewState } from './state';
import { Routes, Route } from 'react-router-dom';
import { apiGetTodos, apiCreateTodo, apiDeleteTodo, apiModifyTodo, convertAllTodos, convertTodo } from './api';

function App() {
  let [todos, setTodos] = useRecoilState(todoListState);

  const removeTodo = todo => {
    apiDeleteTodo(todo.id)
    .then(todo => setTodos(todos.filter(all => all.id !== todo.id)));
  }

  const createTodo = description => {
    apiCreateTodo(description)
      .then(convertTodo)
      .then(todo => setTodos([...todos, todo]));
  }

  return (
      <div className="App">
      <Routes>
        <Route path="/" element={<TodoListView removeTodo={removeTodo} />}/>
        <Route path="/info/:id" element={<TodoInfoView />}/>
        <Route path="/create" element={<TodoCreateView createTodo={createTodo} />}/>
      </Routes>
      </div>
  );
}

export default App;
