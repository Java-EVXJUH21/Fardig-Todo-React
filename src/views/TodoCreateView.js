import "./TodoCreateView.css";
import { useState } from 'react';
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { viewState } from "../state";

function TodoCreateView(props) {
    let navigate = useNavigate();
    let [description, setDescription] = useState('');

    const create = () => {
        props.createTodo(description);
        navigate('/');
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