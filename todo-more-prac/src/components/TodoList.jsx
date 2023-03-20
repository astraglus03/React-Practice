import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
import TodoListitem from './TodoListitem';
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {
  const rowRenderer = useCallback(({ index, key, style }) => {
    const todo = todos[index];
    return (
      <TodoListitem
        todo={todo}
        key={key}
        onRemove={onRemove}
        onToggle={onToggle}
        style={style}
      />
    );
  },[onRemove,onToggle,todos]);
  return (
    <List
    className='TodoList'
    width={496} // 전체 크기
    height={497} // 전체 높이
    rowCount={todos.length} // 항목 개수 
    rowHeight={56}
    rowRenderer={rowRenderer} // 항목을 렌더링할 때 쓰는 함수
    list={todos} // 배열
    style={{outline:"none"}} // List에 기본 적용 되는 outline 스타일 제거
     />
  );
};

export default React.memo(TodoList);
