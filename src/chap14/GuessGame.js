import { useRef, useState, useEffect } from "react";

function GuessGame() {

    const inputRef = useRef();
    const [msg1, setMsg1] = useState(false);
    const [msg2, setMsg2] = useState(false);
    const [msg3, setMsg3] = useState(false);
    const [randomNum, setRandNum] = useState(0);
    const [numOfTries, setNumOfTries] = useState(0);
    
    function doRandom(){
        let num = Math.floor(Math.random() * 100);
        setRandNum(num);
    }

    useEffect(() => {
        doRandom();
    }, []);


    function calculateResult(){
        
        setNumOfTries(numOfTries+1);
        let input = parseInt(inputRef.current.value);
        console.log(randomNum);


        if(input > randomNum){
            setMsg1(true);
            setMsg2(false);
            setMsg3(false);
        }
        else if (input < randomNum){
        
            setMsg1(false);
            setMsg2(true);
            setMsg3(false);
           
        }
        else{

            setMsg1(false);
            setMsg2(false);
            setMsg3(true);

        }

    }
        
    return ( 

        <div>
            <h1>Guess Game</h1>
            <hr/>
            <br/>
            Guess No:   
            <input type="text" ref={inputRef}/> 
            <button onClick={calculateResult}>go</button>
            
            {msg1 && <p>Incorrect, try lower number</p> }
            {msg2 && <p>Incorrect, try higher number</p>}
            {msg3 && <p>You win</p>}
            {numOfTries && <p>Number of Tries</p>}
        </div>
     );

    }
export default GuessGame;
