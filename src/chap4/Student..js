import { useRef, useState } from "react";

function Student() {

    const numRef = useRef();
    const [refresh, setRefresh] = useState(false);
    const [students, setStudents] = useState([]);

    function generateStudent(){

        let num = numRef.current.value;
        let students = [];
        for(let i = 0; i < num; i++){

            let student = {id: i, name: `Student ${i}`, 
            email: `Student ${i}@gmail.com`};
            students.push(student);
        }

        //console.log(students);
        setStudents(students);
        setRefresh(true);

    }
    return (

        <div>
            Number of Student : <input type="text" ref={numRef}/>
            <button onClick={generateStudent}>Generate</button>
        

        { refresh && (
            <table className="table">
            <thead>
                <tr>
                    <td>No</td>
                    <td>Name</td>
                    <td>Email</td>
                </tr>
            </thead>
            <tbody>
                {students.map((stu, index) => (

                        <tr key={stu.id}>
                        <td>{ index }</td>
                        <td>{ stu.name }</td>
                        <td>{ stu.email }</td>
                        </tr>
                ))}
               
            </tbody>
        </table>
        )}
        </div>
    );
}

export default Student;