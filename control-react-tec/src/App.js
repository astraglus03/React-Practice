import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import Component from './Component';
import State from './State';
import ClickEvent from './ClickEvent';
import IterationSample from './IterationSample';
import Counter from './Hooks/Counter';
import Info from './Hooks/Info';
import Average from './Hooks/Average';

function App() {
  const name="리액트";
  const style={
      backgroundColor:"skyblue",
      color:"white",
      fontSize:"48px",
      fontWeight:"bold",
      padding:16,
      textAlign:"center",
  };

  const [hide,setHide]=useState(true);
  return (
    <div>
      {/* <div style={style}>{name}</div>
      <Component name={"멍청이"}><br/>{name}</Component>
      <br/><br/><br/><br/>
      <State  />
      <ClickEvent /><br/><br/><br/><br/>
      <IterationSample /> */}
      <Counter  />
      <br/>
      {/* <button onClick={()=>{setHide(!hide)}}>{hide ? "숨기기" : "보이기"}</button>
      <hr />
      {hide && <Info />}  */}
      {/* if문이랑 동일   */}
      <Info />
      <Average />
    </div>
  );
}

export default App;
