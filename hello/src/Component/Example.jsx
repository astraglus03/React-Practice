import React,{useState} from 'react';

const Example = () => {
    const [hello,setHello]=useState('fe study');
    const onClickHello=()=> setHello('안녕하세요~ 오늘 직접 코딩해봅니다.');
    const onClickBye=()=> setHello('오늘 수업은 여기까지입니다.');
    return (
        <div>
            <button onClick={onClickHello}>코딩</button>
            <button onClick={onClickBye}>수업끝</button>
            <h1>{hello}</h1>
        </div>
    );
};

export default Example;