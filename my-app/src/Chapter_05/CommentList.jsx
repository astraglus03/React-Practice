import React from "react";
import Comment from "./Comment";

const comments=[
    {
        name:"이인제",
        comment:"안녕하세요 소플입니다.",
    },
    {
        name:"김건동",
        comment:"코린이입니다.",
    },
    {
        name:"김태혁",
        comment:"아기사자 올거같습니다.",
    }
];

function CommentList(props){
    return(
        <div>
           {comments.map((comment)=>{
            return(
                <Comment name={comment.name} comment={comment.comment}/>
            );
           })}
        </div>
    );
}

export default CommentList;