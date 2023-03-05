import React, { useState } from "react";

const IterationSample = () => {
  // var num = [1, 2, 3, 4, 5];

  // var res = num.map((nums,index) => <li key={index}>{nums}</li>);
  // return <div><ul>{res}</ul></div>;

  const [names,setNames]=useState([
    {id:1,text: "눈사람"},
    {id:2,text: "얼음"},
    {id:3,text: "눈"},
    {id:4,text: "바람"},
  ]);
  const [input,setInput]=useState("");
  const [nextId,setNextId]=useState(5);

  const onChange =(e)=>{
    setInput(e.target.value);
  }

  const onClick =() =>{
    const nextNames=names.concat({ // 배열에 데이터 추가-> concat = 배열의 내장함수
      id:nextId,
      text:input
    });
    setNextId(nextId+1);
    setNames(nextNames);
    setInput("");
  }

  const onRemove = id=>{
    const nextNames=names.filter(name=>name.id!==id); // 배열에 데이터 제거-> filter = 배열의 내장함수
    setNames(nextNames);
  }

  const nameslist=names.map(name=><li key={name.id} onDoubleClick={()=> onRemove(name.id)}>{name.text}</li>);
  return(
    <>
      <input type="text" value={input} onChange={onChange} />
      <button onClick={onClick} >추가</button>
      <ul>{nameslist}</ul>
    </>
  );

};

export default IterationSample;
