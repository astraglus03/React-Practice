import React, { useCallback } from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListitem.scss';
const TodoListitem = ({todo,onRemove, onToggle}) => {
  const {id,text,checked}= todo;

  return (
    <div className="TodoListitem">
      <div className={cn('checkbox',{checked})} onClick={()=>onToggle(id)}>
        {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={()=>{onRemove(id)}}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default React.memo(TodoListitem); 
// React.memo를 사용하면 컴포넌트의props가 바뀌지않는한 리렌더링되지않는다
