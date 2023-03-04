import React, { useState } from "react";

const ClickEvent = () => {
  //   const [message, setMessage] = useState("");
  //   const [username, setUsername] = useState("");
  //   const onChangeMessage = (event) => setMessage(event.target.value);
  //   const onChangeUsername = (event) => setUsername(event.target.value);
  //   const onClickSend = () => {
  //     alert(message+" "+username);
  //     setMessage("");
  //     setUsername("");
  //   };

  const [form, setForm] = useState({ username: "", message: "" });
  const { username, message } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };
  const onClickSend = () => {
    alert(message + " " + username);
    setForm({
      username: "",
      message: "",
    });
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClickSend();
    }
  };

  return (
    <div>
      <h1>이벤트 연습하기</h1>
      <input
        type="text"
        name="username"
        value={username}
        placeholder="이름 입력"
        onChange={onChange}
      /><br/>
      <input
        type="text"
        name="message"
        value={message}
        placeholder="메세지 입력"
        onChange={onChange}
        onKeyPress={onKeyPress}
      />

      <button onClick={onClickSend}>보내기</button>
      리액트 연습중
    </div>
  );
};

export default ClickEvent;
