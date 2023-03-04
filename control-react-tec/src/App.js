import logo from './logo.svg';
import React from 'react';
import './App.css';
import Component from './Component';
import State from './State';
import ClickEvent from './ClickEvent';
import IterationSample from './IterationSample';

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
  return (
    <div>
      <div style={style}>{name}</div>
      <Component name={"멍청이"}><br/>{name}</Component>
      <br/><br/><br/><br/>
      <State  />
      <ClickEvent />
      <IterationSample />
    </div>
  );
}

export default App;
