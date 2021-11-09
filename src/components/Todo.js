import React from 'react';

const Todo = ({ todo }) =>{
    return (
        <div className="card mt-3">
        <div className="card-body">
            <div className="card-title text-end">
                <h3>{todo.title}</h3>
                <button className="btn btn-sm btn-outline-success">Terminar</button>
            </div>
            <div className="card-text text-end">
                <p>{todo.description}</p>
            </div>
            <hr />
            <div className="d-flex justify-content-end">
                <button className="btn btn-sm btn-outline-primary me-2">Editar</button>
                <button className="btn btn-sm btn-outline-danger">Eliminar</button>
            </div>
        </div>
    </div>
    );
}

export default Todo;