import React, { useState } from 'react';

const AddDataMap = () => {
    const [name, setName] = useState([
        { id: 1, text: "멋쟁이" },
        { id: 2, text: "사자" },
        { id: 3, text: "처럼" },
        { id: 4, text: "화이팅" },
    ]);
    const [text, setText] = useState('');
    const [add, setAdd] = useState(5);

    const onChangeList = (e) => {
        setText(e.target.value);
    };

    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            onClick();
        }
    };

    const onClick = () => {
        const next = name.concat({
            id: add,
            text: text,
        });
        setAdd(add + 1);
        setName(next);
        setText('');
    };

    const onRemove = () => {
        const filteredName = name.filter((value, index) => index !== name.length - 1); 
        setName(filteredName);
    };

    const list = name.map((value) => (
        <li key={value.id} style={{ listStyle: 'none' }}>
            {value.text}
        </li>
    ));

    return (
        <div>
            <input type="text" value={text} onChange={onChangeList} onKeyDown={onKeyPress} />
            <button onClick={onClick}>추가하기</button>
            <button onClick={onRemove}>제거하기</button>
            {list}
        </div>
    );
};

export default AddDataMap;
