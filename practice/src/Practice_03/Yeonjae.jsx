import React, {usestate} from 'react';

const Yeonjae = () => {
    const [value,setValue]=usestate("참 석");
    return (
        <div>
            <p>{value}</p>
            <button onClick={()=> setValue(value+"무 조 건 참 석")}>연재야 여기~</button>
        </div>
    );
};

export default Yeonjae;