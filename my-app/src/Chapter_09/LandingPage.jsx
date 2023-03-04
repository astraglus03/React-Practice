import React, {useState} from "react";
import ToolBar from "./ToolBar";

function LandingPage(props){
    const [isLoggedIn, setIsLoggedIn]= useState(false);
    const [isLoggedOut, setIsLoggedOut]=useState(false);

    const onClickLogin=()=>{
        setIsLoggedIn(true);
        setIsLoggedOut(false);
    }
    
    const onClickLogout=()=>{
        setIsLoggedOut(true);
        setIsLoggedIn(false);
    }

    return (
        document.title="안녕하세요",
        <div>
            <ToolBar 
            isLoggedIn={isLoggedIn}
            onClickLogin={onClickLogin}
            onClickLogout={onClickLogout}
            />
            <div style={{padding:16}}>소플과 함께하는 리액트 공부!</div>
        </div>
    );
}

export default LandingPage;