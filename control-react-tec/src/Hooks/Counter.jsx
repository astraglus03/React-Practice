import React, { useReducer } from 'react';

function reducer(state,action){
    switch(action.type){
        case "INCREMENT": return {value: state.value+1};
        case "DECREMENT": return {value: state.value-1};
        default: return state;
    }
}

const Counter = () => {
    const [state,dispatch]=useReducer(reducer,{value:0}); 
    // 첫번째 파라미터에는 리듀서,두번째 파라미터에는 기본값
    // dispatch는 액션을 발생시키는 함수 
    return (
        <div>
            <p>현재 카운터 값은 <b>{state.value}</b>입니다.</p>
            <button onClick={()=> dispatch({type: "INCREMENT"})}>증가</button>
            <button onClick={()=> dispatch({type: "DECREMENT"})}>감소</button>
        </div>
    );
};

export default Counter;