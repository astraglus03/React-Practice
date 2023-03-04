import React,{useState, useEffect} from "react";

function Counter(props){
    const [count,setCount]=useState(0);

    useEffect(()=>{
        document.title=`제목입니다`
    },[])

    return(
        <div>
            
            <p>{count}</p>
            <button onClick={()=>setCount(count+1)}>클릭하기</button>
        </div>
    );
}

export default Counter;