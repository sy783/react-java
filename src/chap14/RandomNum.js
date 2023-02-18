import { useState, useEffect } from 'react';

function RandomNum() {

    const [randNum, setRandNum] = useState(0);

    useEffect(() => {
        doRandom();
    }, []);
    
    function doRandom(){
        let num = Math.floor(Math.random() * 100);
        setRandNum(num);
    }

    function displayMsg(){
       if(randNum > 50)
            return <p>Greater than 50</p>       
        else
            return <p>Less than 50</p>
    }

    return ( 

        <div>
            <button onClick={doRandom}>Click Me</button>
            {/* { alertMsg && <p>Guess again </p>} */}
            Rand Num: { randNum }
            <hr/>

            {displayMsg()}
        </div>

     );
}

export default RandomNum;