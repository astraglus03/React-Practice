import React from 'react';
import TodoListitem from './TodoListitem';
import './TodoList.scss';

const TodoList = ({todos, onRemove, onToggle}) => {
    return (
        <div className='TodoList'>
            {todos.map(prop=>( // map함수 배열 반복처리
                <TodoListitem todo={prop} key={prop.id} onRemove={onRemove} onToggle={onToggle} />
            ))} 
        </div>
    );
};

export default TodoList;