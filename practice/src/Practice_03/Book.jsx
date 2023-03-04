import React from "react";

function Book(props){
    return(
        <div>
            <h3>{`이 책의 이름은 ${props.name} 입니다.`}</h3>
            <h3>{`이 책은 총 ${props.numberOfPage}입니다.`}</h3>
        </div>
    );
}
function Library(props){
    return(
        <div>
        <Book name="처음 만난 파이썬" numberOfPage={300}/>
        <Book name="처음 만난 AWS" numberOfPage={400}/>
        <Book name="처음 만난 리액트" numberOfPage={500}/>
        </div>
    );
}

export default Library;

