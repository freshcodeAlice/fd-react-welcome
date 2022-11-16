import React from 'react';

const TodoItem = (props) => {
    return (
        <li>{props.text} <button>X</button></li>
    );
}

export default TodoItem;
