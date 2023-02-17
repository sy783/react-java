import { useRef } from "react";

function CreatePost() {

    const authorRef = useRef();
    const titleRef = useRef()


    function doSave(){
        
        let author = authorRef.current.value;
        let title = titleRef.current.value;
        let data = { author, title};
        let url = 'http://localhost:3004/posts';
        let param = {
            method : 'POST',
            body : JSON.stringify(data),
            headers : { 'Content-Type': 'application/json' }
        };
        fetch(url, param);
    }


    return (  

        <div>
            <div class="mb-3">
                <label class="form-label">Author</label>
                <input type="email" class="form-control" ref={authorRef} placeholder="name@example.com" />
            </div>
            <div class="mb-3">
                <label class="form-label">Title</label>
                <textarea class="form-control" rows="3" ref={titleRef}></textarea>
            </div>
            <div class="mb-3">
               <button className="btn btn-primary" onClick={doSave}>Save</button>
            </div>
        </div>
    );
}

export default CreatePost;