import React,{useState} from "react";

function Reservation(props){
    const [breakfast,setBreakfast]=useState(false);
    const [numberOfGuest,setNumberOfGuest]=useState(0);

    const handleSubmit=(event)=>{
        alert(`아침식사 여부: ${breakfast}, 방문객 수: ${numberOfGuest}`);
        event.preventDefault();
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>
                <input type="checkbox" checked={breakfast} onChange={(event)=>{
                    setBreakfast(event.target.value);
                }} />
            </label>
            <label>
                <input type="number" value={numberOfGuest} onChange={(event)=>{
                    setNumberOfGuest(event.target.value);
                }} />
            </label>
            <input type="submit" value={"제출하기"} />
        </form>
    );
}

export default Reservation;