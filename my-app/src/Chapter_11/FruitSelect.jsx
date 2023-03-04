import React,{useState} from "react";

function FruitSelect(props){
    const [value,setValue]=useState("");

    const check=(event)=>{
        setValue(event.target.value);
    }

    const checkSubmit=(event)=>{
        alert("선택한과일:"+ value)
        event.preventDefault();
    }
    return(
    <form onSubmit={checkSubmit}>
        <label>
            <select value={value}onChange={check}>
                <option value="apple">사과</option>
                <option value="banana">바나나</option>
                <option value="grape">포도</option>
                <option value="watermelon">수박</option>
            </select>
        </label>
        <input type="submit" value={"제출하기"} />
    </form>
    )
}
export default FruitSelect;