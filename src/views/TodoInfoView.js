import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { convertTodo, apiGetTodo, apiModifyTodo } from "../api";
import "./TodoInfoView.css";

function TodoInfoView(props) {
    let { id } = useParams();
    let navigate = useNavigate();
    let [todo, setTodo] = useState(null);

    useEffect(() => {
        apiGetTodo(id)
            .then(convertTodo)
            .then(setTodo);
    }, []);

    const updateTodo = todo => {
        apiModifyTodo(todo.id, todo.completed, todo.completedDate)
            .then(convertTodo)
            .then(setTodo);
    }

    const handleUndo = () => {
        updateTodo({
            ...todo,
            completed: false
        });
    }

    const handleComplete = () => {
        updateTodo({
            ...todo,
            completed: true,
            completedDate: new Date()
        });
    }

    return <>
        {todo && <div id="todo-info-container">
            <span onClick={() => navigate('/')} id="todo-info-nav">
                Back
            </span>
            <div id="todo-info-title">
                <h1>TODO #{todo.id}</h1>
            </div>
            <div id="todo-info-content">
                <div className="todo-info-info">
                    <span>Description: </span>
                    <span>{todo.description}</span>
                </div>
                <div className="todo-info-info">
                    <span>Completed: </span>
                    <span>{todo.completed ? "Yes" : "No"}</span>
                </div>
                <div className="todo-info-info">
                    <span>Date: </span>
                    <span>{todo.createdDate.toUTCString()}</span>
                </div>
                {
                    todo.completed && (
                        <div className="todo-info-info">
                            <span>Completed date: </span>
                            <span>{todo.completedDate.toUTCString()}</span>
                        </div>)
                }
            </div>
            <div id="todo-info-btn-container">
                {todo.completed ?
                    <div className="todo-action-button"
                        id="todo-undo-button"
                        onClick={handleUndo}
                    >Undo</div>
                    :
                    <div className="todo-action-button"
                        id="todo-complete-button"
                        onClick={handleComplete}
                    >Complete</div>}
            </div>
        </div>}
    </>
}

export { TodoInfoView }