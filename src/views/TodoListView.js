import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { todoListState, viewState } from "../state";
import "./TodoListView.css";

function TodoListView(props) {
    let navigate = useNavigate();
    let todos = useRecoilValue(todoListState);

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