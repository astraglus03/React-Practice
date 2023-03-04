import React from "react";
import styled from "styled-components";

const StyleButton = styled.button`
    padding:8px 16px;
    font-size:16px;
    border-width:1px;
    border-radius:8px;
    cursor:pointer;
`;

function Button(props){
    return(
        <StyleButton onClick={props.onClick}>{props.title || "button"}</StyleButton>
    );
}
export default Button;