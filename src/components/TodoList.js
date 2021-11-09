import React from 'react';
import Todo from './Todo';

const todo1 = {
    title: 'Todo #1',
    description: 'Descripcion del Todo #1',
    completed: false
}

const todo2 = {
    title: 'Todo #2',
    description: 'Descripcion del Todo #2',
    completed: true
}

const TodoList = () => {
    return (
        <div>
            <h1>Soy TodoList</h1>
           <Todo 
                todo={todo1}
           />
           <Todo 
                todo={todo2}
           />
        </div>
    );
}

export default TodoList;