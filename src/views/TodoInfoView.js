import { useRecoilValue, useSetRecoilState } from "recoil";
import { todoListState, viewState } from "../state";
import { useNavigate, useParams } from "react-router-dom";
import "./TodoInfoView.css";

function TodoInfoView(props) {
    let { id } = useParams();
    let navigate = useNavigate();
    let todos = useRecoilValue(todoListState);
    let todo = todos.find(all => all.id == id);

    const handleUndo = () => {
        props.updateTodo({
            ...todo,
            completed: false
        });
    }

    const handleComplete = () => {
        props.updateTodo({
            ...todo,
            completed: true,
            completedDate: new Date()
        });
    }

    return <>
        <div id="todo-info-container">
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
        </div>
    </>
}

export { TodoInfoView }