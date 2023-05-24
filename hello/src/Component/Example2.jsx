import React, { useState } from "react";

const Example2 = () => {
    const [message,setMessage]=useState('');
    const onChangeMessage=(e)=>{
        setMessage(e.target.value)
    }
    const onClick=()=> {
        alert(message);
        setMessage('');
    }
    const onKeyDown =(e)=>{
        if(e.key==='Enter'){
            onClick();
        }
    }
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input type="text" value={message} onChange={onChangeMessage} onKeyDown={onKeyDown} />
      <button onClick={onClick}>전송하기</button>
    </div>
  );
};

export default Example2;
