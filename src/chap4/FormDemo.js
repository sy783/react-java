import { useState, useRef } from "react";


function FormDemo() {

    // initialize the variable
    const [task, setTask] = useState([]);
    const [refresh, setRefresh] = useState(false); //true = show table when there is no value, 
    const taskRef = useRef(); //use this to read the value from the input

    function saveData(){

        let arr = task;
        arr.push(taskRef.current.value); //to update the value on array
        setTask(arr);
        console.log(task);
        setRefresh(taskRef.current.value); //to show the updated table in the html

    }
    function showTable(){
        return(
            <table className='table table-bordered table-striped table-hover'>
        <thead>
            <tr>
                <td>No</td>
                <td>Value</td>
            </tr>
        </thead>
        <tbody>
            {task.map((num, index) => (
                <tr key = { index }>
                    <td>{ index + 1 } </td>
                    <td> { num }</td>
                </tr>
            ))}
        </tbody>
    </table>
        );
        

    }
    return ( 

        <div className="container">
            <input type="text" ref={taskRef}/>
            <button onClick={saveData} class="btn btn-primary">Save</button> 

            <hr />
            { refresh && showTable()}

        
        </div>
     );
}

export default FormDemo;
