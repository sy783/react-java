import { useState } from "react";

function Demo5(){

    const [ showMessage, setShowMessage ] = useState(false);
    const [ display, setDisplay ] = useState(false);


    function doToggle (){
        setShowMessage(!showMessage);
    }


    return(
        
        <div>
                
                {/* to make the message dynamic */}
                <button onClick={doToggle}>Click me to 
                {showMessage ? ' hide' : ' show'} the rest</button>

                
                <div>
                    {/* if true then it will show, if false then it will hide */}
                    { showMessage && <p> I am the content that should be hidden by default </p>}
                </div>

    
        </div>
            
    )

}

export default Demo5;