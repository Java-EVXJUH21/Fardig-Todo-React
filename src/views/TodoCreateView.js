import "./TodoCreateView.css";
import { useState } from 'react';

function TodoCreateView(props) {
    let [description, setDescription] = useState('');

    const create = () => {
        props.createTodo(description);
        props.setView('list');
    }
    return <>
        <div id="todo-create-container">
          <input onChange={event => setDescription(event.target.value)}/>
          <button onClick={create}>Save</button>
        </div>
    </>
}

/*

description


*/

export { TodoCreateView }