import React,{useRef, useState} from "react";

function FocusButton(props){
    const inputElem=useRef(null);

    const onButtonClick=()=>{
        inputElem.current.focus();
    }

    return(
        <div>
            <input type="text" ref={inputElem} />
            <button onClick={onButtonClick}> Focus the input</button>
        </div>
    );
}
export default FocusButton;