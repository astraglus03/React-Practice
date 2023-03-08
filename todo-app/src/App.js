import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useCallback, useState, useRef } from 'react';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트 기초 알아가기',
      checked: true,
    },
    {
      id: 2,
      text: '김태혁 못살게굴기',
      checked: true,
    },
    {
      id: 3,
      text: '재원이랑 치킨먹기',
      checked: false,
    },
  ]);

  const nextId = useRef(4); // 추가하기위해 사용

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo)); // 배열 합치기
      nextId.current += 1;
    },
    [todos],
  );

  const onRemove = useCallback((id) => {
    setTodos(todos.filter((todo) => todo.id !== id)); // 지울때는 filter사용하며 추가할땐 concat사용
  });

  const onToggle = useCallback((id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  },[todos]);

  return (
    <div>
      <TodoTemplate>
        안녕
        <TodoInsert onInsert={onInsert} />
        {/* 대문자 주의하기! */}
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    </div>
  );
}

export default App;
