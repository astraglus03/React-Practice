// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// import React from 'react';

// const App = () => {
//   return (
//     <>
//       <h1>리액트 안녕!</h1>
//       <h2>잘 작동하니?</h2>
//     </>
//   );
// };

// export default App;


// import React from 'react';

// const App = () => {
//   const name="수요일 리액트 수업";
//   return (
//     <div>
//       <h1>{name} 안녕!</h1> 
//       <h2>잘 작동하니?</h2>
//     </div>
//   );
// };

// export default App;

// import React from 'react';

// const App = () => {
//   const name="오늘 수업 리액트";
//   return (
//     <div>
//       {name==="오늘 수업 리액트"? 
//       <h1>오늘 수업 리액트</h1>
//       :
//       null
//     }
//     </div>
//   );
// };

// export default App;



// import React from 'react';

// const App = () => {
// 	const name = undefined;
// 	return name || "undefined";
// }

// export default App;


import React from 'react';
import './App.css';

const App = () => {
  const name = "react";
  return (
    <div className='hello'>
      {name}
    </div>
  );
};

export default App;