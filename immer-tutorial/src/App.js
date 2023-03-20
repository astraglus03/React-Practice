import produce from 'immer';
import React, { useCallback, useRef, useState } from 'react';

const App = () => {
  const nextId=useRef(1);
  const [form,setForm]=useState({name:'', username:''});
  const [data,setData]=useState({
    array:[]
  });
  // input 수정을 위한 함수
  const onChange=useCallback(e=>{
    const {name,value}=e.target;
    setForm(produce(draft=>{
      // produce함수가 immer라이브러리에서 사용 첫번째 파라미터는 수정하고싶은상태 
      //첫번째 파라미터가 함수형태라면 업데이트 함수를 반환하면됨 ex) form,draft -> draft
      // 두번째 파라미터는 상태를 어떻게 업데이트 할지 정의하는 함수
      draft[name]=value;
    }))
  },[form])
  // form 등록을 위한 함수
  const onSubmit=useCallback(e=>{
    e.preventDefault();
    const info={
      id:nextId.current,
      name:form.name,
      username:form.username
    };
    // array에 새 항목 등록
    setData(produce(draft=>{
      draft.array.push(info);
    }));
    // form 초기화
    setForm({
      name:"",
      username:""
    });
    nextId.current+=1;
  },[data,form.name,form.username]);

  // 항목을 삭제하는 함수
  const onRemove=useCallback(id=>{
    setData(produce(draft=>{
      draft.array.splice(draft.array.findIndex(info=> info.id ===id),1)
    }))
  },[data])


  return (
    <div>
      <form onSubmit={onSubmit}>
      <input name='username' placeholder='아이디를 입력하세요' value={form.username} onChange={onChange} />
      <input name='name' placeholder='이름을 입력하세요' value={form.name} onChange={onChange} />
      <button type="submit">등록</button>
      </form>
      <div>
        <ul>
          {data.array.map(info=>(<li key={info.id} onClick={()=>onRemove(info.id)}>{info.username} ({info.name})</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;