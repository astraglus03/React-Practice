import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames'; // 조건부 스타일링 하기위해 classnames 사용
import './TodoListItem.scss';

const TodoListItem = ({ props, onRemove,onToggle }) => {
  const { id, text, checked } = props;

  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', { checked })} onClick={()=>onToggle(id)} >
        {/* class이름이 checkbox */}
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div
        className="remove"
        onClick={() => {
          onRemove(id);
        }}
      >
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
