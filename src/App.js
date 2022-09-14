import './App.css';
import { useState } from 'react';
import { TodoInfoView } from './views/TodoInfoView';
import { TodoListView } from './views/TodoListView';
import { TodoCreateView } from './views/TodoCreateView';

function App() {
  let [view, setView] = useState('list');
  let [viewData, setViewData] = useState(undefined);
  let [todos, setTodos] = useState([
    {
      id: 0,
      description: 'Städa',
      createdDate: new Date(),
      completed: true,
      completedDate: new Date()
    },
    {
      id: 1,
      description: 'Handla mat',
      createdDate: new Date(),
      completed: false,
      completedDate: new Date()

    },
    {
      id: 2,
      description: 'Tvätta kläder',
      createdDate: new Date(),
      completed: false,
      completedDate: new Date()
    },
  ]);

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

  let component;
  if (view === 'list') {
    component = <TodoListView
                  todos={todos} 
                  setView={setView}
                  removeTodo={removeTodo}
                  viewData={viewData} 
                  setViewData={setViewData} />
  } else if (view === 'info') {
    component = <TodoInfoView 
                   todos={todos} 
                   updateTodo={updateTodo} 
                   setView={setView} 
                   viewData={viewData} 
                   setViewData={setViewData} />;
  } else if (view === 'create') {
    component = <TodoCreateView
                   createTodo={createTodo}
                   setView={setView} />;
   }

  return (
    <div className="App">
      {component}
    </div>
  );
}

export default App;
