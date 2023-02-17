import { useState, useEffect } from 'react';


function FetchDemo() {

    const [posts, setPosts] = useState([]);

    //listening to the changes of any state
    useEffect(() =>{
        console.log("use effect is running...");
        allPosts();

    }, ['post']);

    //retrieve all post from json placeholder website
    function allPosts(){

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'GET',
        }).then((res) => {
            return res.json();
        }).then((data) =>{
            console.log(data);
            setPosts(data);
        });
        
    }


    return (  
        <>
            { allPosts() }
            <ul>
                {posts.map((data, index) => (
                    <li>Title : {data.title}
                    <br />
                    ID : {data.id}
                    <br />
                    Body : {data.body}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default FetchDemo;