import React from "react";

function Button(props){
    return(
    <button style={{ color: props.color }}>
        <b>
            {props.children}
        </b>
    </button>
    );
}

function ConfirmDialog(props){
    return(
        <div>
            <p>내용을 확인 하셨으면 확인 버튼을 눌러주세요</p>
            <Button color='green'>확인</Button>
        </div>
    );
}
export default ConfirmDialog;