import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Library from './Chapter_03/Library';
import Clock from './Chapter_04/Clock';
import CommentList from './Chapter_05/CommentList';
import Counter from "./Chapter_07/Counter";
import Accommodate from './Chapter_07/Accommodate';
import UserStatus from './Chapter_07/UserStatus';
import TextInputWithFocusButton from "./Chapter_07/TextInputWithFocusButton"
import ConfirmButton from './Chapter_08/ConfirmButton';
import Greeting from './Chapter_09/Greeting';
import LandingPage from './Chapter_09/LandingPage';
import AttendanceBook from './Chapter_10/AttendanceNook';
import NameForm from './Chapter_11/NameForm';
import RequestForm from './Chapter_11/RequestForm';
import FruitSelect from './Chapter_11/FruitSelect';
import Reservation from './Chapter_11/Reservation';
import SignUp from './Chapter_11/SignUp';
import Calculator from './Chapter_12/Calculator';
import ProfileCard from './Chapter_13/ProfileCard';
import DarkOrLight from './Chapter_14/DarkOrLight';
import Blocks from './Chapter_15/Blocks';

  const root = ReactDOM.createRoot(document.getElementById('root'));

  setInterval(() => {
    root.render(
      <React.StrictMode>
        <UserStatus />
      </React.StrictMode>
    );
  }, 1000);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
