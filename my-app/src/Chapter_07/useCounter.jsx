import React, {useState} from "react";

function useCounter(initialValue){
    const [count,setCount] = useState(initialValue);

    const increaseCount=()=> setCount((value)=>value+1);
    const decreaseCount=()=>setCount((value)=> Math.max(value-1,0));

    return [count,increaseCount,decreaseCount];
}

export default useCounter;