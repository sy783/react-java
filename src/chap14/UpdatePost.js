import { useRef } from "react";

function UpdatePost() {

    const authorRef = useRef();
    const titleRef = useRef()
    const idRef = useRef();

    function doSave(){
        
        let author = authorRef.current.value;
        let title = titleRef.current.value;
        let id = idRef.current.value;
        let data = { author, title};
        let url = 'http://localhost:3004/posts/'+id;
        let param = {
            method : 'PATCH',
            body : JSON.stringify(data),
            headers : { 'Content-Type': 'application/json' }
        };
        fetch(url, param);
    }


    return (  

        <div>
            <div class="mb-3">
                <label class="form-label">ID</label>
                <input type="email" class="form-control" ref={idRef}/>
            </div>
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

export default UpdatePost;