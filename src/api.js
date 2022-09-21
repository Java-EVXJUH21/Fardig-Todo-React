const API_URL = "http://localhost:8000/";

function url(key) {
    return API_URL + key;
}

export async function apiDeleteTodo(id) {
    let response = await fetch (url('todo/' + id), {
        method: 'DELETE'
    });
    return response.json();
}

export async function apiGetTodos() {
    let response = await fetch (url('todos'));
    return response.json();
}

export async function apiGetTodo(id) {
    let response = await fetch (url('todo/' + id));
    return response.json();
}

export async function apiCreateTodo(description) {
    let response = await fetch (url('todo'), {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ description }),
    });
    return response.json();
}

export async function apiModifyTodo(id, completed, completedDate) {
    let response = await fetch (url('todo/' + id), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ completed, completedDate }),
    });
    return response.json();
}

export function convertAllTodos(todos) {
    for (let todo of todos) {
        convertTodo(todo);
    }

    return todos;
}

export function convertTodo(todo) {
    todo.createdDate = new Date(todo.createdDate);
    todo.completedDate = todo.completedDate !== null ? new Date(todo.completedDate) : null;
    return todo;
}