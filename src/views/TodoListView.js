import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { todoListState, viewState } from "../state";
import { apiGetTodos, convertAllTodos } from "../api";
import "./TodoListView.css";

function TodoListView(props) {
    let navigate = useNavigate();
    let [todos, setTodos] = useRecoilState(todoListState);

    useEffect(() => {
        apiGetTodos()
            .then(convertAllTodos)
            .then(setTodos);
    }, []);

    const removeTodo = (event, todo) => {
        event.stopPropagation();
        props.removeTodo(todo);
    }

    const mapTodo = todo => {
        const handle = () => {
            navigate('/info/' + todo.id);
        }

        return <div key={todo.id} className="todo-item" onClick={handle}>
            <div className="todo-description">
                TODO #{todo.id} - {todo.description}
            </div>
            <div className="todo-check-box">
                {todo.completed && "✅"}
            </div>
            <div onClick={event => removeTodo(event, todo)} className="todo-delete">
                Delete
            </div>
        </div>
    }

    return <div id="todo-list-container">
        <div id="todo-create-button" onClick={() => navigate('/create')}>Create</div>
        {todos.map(mapTodo)}
    </div>
}

export { TodoListView }