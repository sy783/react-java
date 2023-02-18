import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function ListPosts() {

    const [posts, setPosts] = useState([]);

    //listening to the changes of any state
    useEffect(() =>{
        console.log("use effect is running...");
        allPosts();

    }, ['post']);

    //retrieve all post from json placeholder website
    function allPosts(){

        fetch('http://localhost:3004/posts', {
            method: 'GET',
        }).then((res) => {
            return res.json();
        }).then((data) =>{
            console.log(data);
            setPosts(data);
        });
        
    }

    function doDelete(id){

        alert(id);
        fetch('http://localhost:3004/posts/' +id, {
            method: 'DELETE',
        }).then((res) => {
            return res.json(); //convert from string of JSON to JSON
        }).then((data) =>{ //send data to the next step (for us to use the data)
            console.log(data);
            allPosts(); //retrieve all posts from json placeholder website (refresh the data and take all the data from backend)
        }).catch(); //to catch error
    }

    function doClick(){
        alert("you clicked me");
    }


    return (  
        <>
            { allPosts() }
            <div>
                    {posts.map((data, index) => (
                        <div className='card mb-2'>
                             <div className='card-body'>Title : {data.title}
                                <br />
                                ID : {data.id}
                                <br />
                                Author : {data.author}
                                <br />
                                {/* this method if we need to pass data or argument */}
                                <a href='##' className='btn btn-danger' onClick={() => doDelete(data.id)}>Delete</a>
                                {/* this work if no parameter is passed */}
                                <button onClick={doClick}>Click me</button>
                                <Link to={'/edit-post/${data.id}'} className="btn btn-success">Edit</Link>
                            </div>
                        </div>
                ))}
            </div>
        </>
    );
}

export default ListPosts;