import React from 'react';
import { useLayoutEffect, useState } from 'react';

const Complex = () => {
    const[clicks, setClicks] = useState({
        left: 0, right: 0
    })
const handleLeft = () => {
    setClicks({
        ...clicks,
        left: clicks.left + 1,
    })
}
const handleRight = () => {
   setClicks ({
        ...clicks,
        right: clicks.right + 1
    })
   
}


    return (
        <div>
            {clicks.left}
            <button onClick={handleLeft}>Left</button>
            
            <button onClick={handleRight}>Right</button>
            {clicks.right}
        </div>
    )

}

export default Complex;