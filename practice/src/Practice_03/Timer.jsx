import React from "react";

function Timer(props){
    return(
        <div>
            <p>
                <h3>안녕,리액트</h3>
                <h3>현재시간:{new Date().toLocaleTimeString()}</h3>
            </p>
        </div>
    );
}

export default Timer;