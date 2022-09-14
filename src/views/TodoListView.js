import "./TodoListView.css";

function TodoListView(props) {
    const removeTodo = (event, todo) => {
        event.stopPropagation();
        props.removeTodo(todo);
    }

    const mapTodo = todo => {
        const handle = () => {
            props.setViewData({
                id: todo.id
            });
            props.setView('info');
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
        <div id="todo-create-button" onClick={() => props.setView('create')}>Create</div>
        {props.todos.map(mapTodo)}
    </div>
}

export { TodoListView }