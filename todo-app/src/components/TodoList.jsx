import React from 'react';
import TodoListItem from './TodoListItem';
import "./TodoList.scss";

const TodoList = ({todos,onRemove,onToggle}) => {
    return (
        <div className='TodoList'>
            {todos.map((props=>
                <TodoListItem props={props} key={props.id} onRemove={onRemove} onToggle={onToggle} />
                ))}
        </div>
    );
};

export default TodoList;