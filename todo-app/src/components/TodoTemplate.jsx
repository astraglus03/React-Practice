import React from 'react';
import "./TodoTemplate.scss"; // 파일이 두개 전에 있으므로 ..으로 보내줘야함.


const TodoTemplate = ({ children }) => {
  return <div className="TodoTemplate">
    <div className="app-title">일정 관리</div>
    <div className="content">{children}</div>
  </div>;
};

export default TodoTemplate;
