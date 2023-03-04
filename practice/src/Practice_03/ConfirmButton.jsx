import React,{useState} from "react";

function ConfirmButton(props){
    const [click,setClick]=useState(false);

    function Clicked(){
        setClick(click=>!click);
    }
    
    return(
        <div>
            <button onClick={Clicked}>{click ?"확인됨":"확인하기"}</button>
        </div>
    );
}

export default ConfirmButton;