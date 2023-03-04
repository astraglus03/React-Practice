import React from "react";

const students=[
    {
        name:"inje",
        id:1,
    },
    {
        name:"kkd",
        id:2,
    },
    {
        name:"jaewon",
        id:3,
    },
    {
        name:"taehyeok",
        id:4,
    },
    {
        name:"soaple",
        id:5,
    },
];

function AttendanceBook(props){
    return(
        <ul>
            {students.map((student)=>{
                return <li key=/*{`student-id-${student.id}`}*/ {student.id}>{student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;