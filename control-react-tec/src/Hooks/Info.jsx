import userEvent from "@testing-library/user-event";
import React, { useState, useEffect, useReducer } from "react";
import useInputs from "../UseInputs";

function reducer(state, action) {
  return { ...state, [action.name]: action.value };
}

const Info = () => {
  // const [name,setName]=useState("");
  // const [nick,setNick]=useState("");

  // const [state, dispatch] = useReducer(reducer, { name: "", nick: "" });
  // const { name, nick } = state;
  // const onChange = (e) => {
  //   dispatch(e.target);

  const [state,onChange]=useInputs({
    name:"",
    nick:"",
  });
  const {name,nick}=state;

  // useEffect(() => {
  //     console.log("렌더링 완료");
  //     console.log({
  //         "닉네임":nick,
  //         "이름":name
  //     })
  // },[name,nick]);
  //--------------------------------
  // useEffect(() => {

  //     console.log("effect");
  //     console.log(name);
  //     return () => {
  //         console.log("cleanup");
  //         console.log(name);
  //     };
  // }, []);
  return (
    <div>
      <input name="name" onChange={onChange} value={name} />
      <input name="nick" onChange={onChange} value={nick} />
      <br />
      이름:{name}
      <br />
      닉네임:{nick}
    </div>
  );
};

export default Info;
