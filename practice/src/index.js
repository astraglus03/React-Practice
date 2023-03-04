import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Book from './Practice_03/Book';
import ConfirmDialog from './Practice_03/ConfirmDialog';
import Timer from './Practice_03/Timer';
import Comment from './Practice_03/Comment';
import Counter from './Practice_03/Counter';
import FocusButton from './Practice_03/FocusButton';
import ConfirmButton from './Practice_03/ConfirmButton';
import DarkOrLight from './Practice_03/DarkOrLight';
import Practice from './Practice_03/practice';



  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <Practice />
    </React.StrictMode>
  );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
