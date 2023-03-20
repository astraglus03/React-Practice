import React, { useCallback, useRef, useState } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
// "singleQuote": true, // '' 싱글 쿼테이션 사용여부
// "semi": true, // 세미 콜론을 쓸지 말지의 여부
// "useTabs": false, // 탭키 사용
// "tabWidth": 2, // 탭너비 들여쓰기 기본값 4
// "trailingComma":"all", // 객체를 선언할 때 콤마적용
// "printWidth": 80  //  줄 바꿈 할 폭 길이
function createBulkTodos(){
  const array=[];
  for(let i=1;i<=2500;i++){
    array.push(
      {
        id:i,
        text:`할 일 ${i}`,
        checked:false
      }
    )
  }
  return array;
}
// const array=[{id:1,checked:true},{id:2,checked:true}];
// const array1=[...array]
// // for(let i=0;i<array.length;i++){
// //   console.log(array[i])
// // }
// for(let i=0;i<array1.length;i++){
//   console.log(array1[i])
// }
// // array1[0]={...array1[0],checked:false};
// // console.log(array[0]===array1[0]);


// function todoReducer(todos,action){
//   switch(action.type){
//     case "INSERT": // 새로추가
//     // {type:'INSERT',todo:{id:1,text:'todo', checked:false}}
//     return todos.conacat(action.todo)
//     case "REMOVE": // 제거
//     return todos.filter(todo=>todo.id!==id)
//     case "TOGGLE": //토글
//     return todos.map(todo=>todo.id===action.id?{...todo,checked: !todo.checked} :todo,)
//     default:
//       return todos;
//   }
// }
// const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);
// // useReducer를 사용할때는 두번째 파라미터에 초기 상태를 넣어주어야함. 지금은 undefined를 넣고 createBulkTodos를 입력함
// // 이렇게하면 컴포넌트가 맨 처음 렌더링될때만 createBulkTodos 함수 호출됌.
// // usereducer은 기존코드를 많이 고쳐야하지만 컴포넌트 밖에 둘수 있다는 장점이 있다.
// // usereducer를 사용해도되고 usestate의 함수형 업데이트를 사용해도된다.
// // 고윳값으로 사용될 id
// // ref를 사용하여 변수 담기

// const nextid = useRef(4);

// const onInsert = useCallback((text) => {
//   const add = {
//     id: nextid.current,
//     text,
//     checked: false,
//   };
//   dispatch({ type: 'INSERT', add }); // setTodos를 할때 앞에 todos=>를 한번 해주면 함수형 업데이트가 된다.
//   nextid.current += 1;
// }, []);

// const onRemove = useCallback((id) => {
//   dispatch({ type: 'REMOVE', id });
// });

// const onToggle = useCallback((id) => {
//   dispatch({ type: 'TOGGLE', id });
// }, []);
const App = () => {
  const [todos, setTodos] = useState(createBulkTodos)

  const nextid = useRef(2501);

  const onInsert = useCallback(
    (text) => {
      const add = {
        id: nextid.current,
        text,
        checked: false,
      };
      setTodos(todos=>todos.concat(add)); // setTodos를 할때 앞에 todos=>를 한번 해주면 함수형 업데이트가 된다.
      nextid.current += 1;
    },
    [],
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos=>todos.filter((todo) => todo.id !== id));
    },
  );

  const onToggle = useCallback((id) => {
    setTodos(todos=>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } 
        : todo,
      ),
    );
  },[]);

  return (
    <div>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
      </TodoTemplate>
    </div>
  );
};

export default App;
