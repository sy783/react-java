import Demo5 from "./Demo5";


function LoopDemo() {
    
    //normal js loop
    function demo(){
        let arr = [1, 2, 3, 4, 5];
        arr.forEach((num) => console.log(num));
    }
    
    //map 

    const arr = [1, 2, 3, 4, 5];

    return ( 

    

        <div>

            { arr.map((num, index) => (
            <p> key={index} <Demo5 /> </p>)
            
            )}


        </div>
     );

}

export default LoopDemo;