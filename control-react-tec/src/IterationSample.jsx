import React from "react";

const IterationSample = () => {
  var num = [1, 2, 3, 4, 5];

  var res = num.map((nums,index) => <li key={index}>{nums}</li>);
  return <div><ul>{res}</ul>리액트 연습중</div>;
};

export default IterationSample;
