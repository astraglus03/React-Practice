import React,{useState} from 'react';

const Example1 = () => {
    const [hello,setHello]=useState('fe study');
    const onClickHello=()=> setHello('안녕하세요~ 오늘 직접 코딩해봅니다.');
    const onClickBye=()=> setHello('오늘 수업은 여기까지입니다.');

    const[color,setColor]=useState('red');
    

    return (
        <div>
            <button onClick={onClickHello}>안녕</button>
            <button onClick={onClickBye}>잘가</button>
            <h1 style={{color}}>{hello}</h1>

            <button style={{color:'green'}} onClick={()=>setColor('green')}>초록색</button>
            <button style={{color:'blue'}} onClick={()=>setColor('blue')}>파란색</button>
            <button style={{color:'red'}} onClick={()=>setColor('red')}>빨간색</button>
        </div>
    );
};

export default Example1;