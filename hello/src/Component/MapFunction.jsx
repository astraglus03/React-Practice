import React from 'react';

const MapFunction = () => {
    const study= ['React','Django','Spring','Kotlin'];
    const list=study.map((value,index)=><li style={{listStyle:'none'}} key={index}>{value}</li>);
    return (
        <div>
            <ul>{list}</ul>
        </div>
    );
};

export default MapFunction;