import React , {useState} from 'react'
import "../../styles/Post.css"
import {v4 as uuidv4} from 'uuid'

function AddPost({addPost}) {
    const [post, setPost] = useState({
        title: "",
        body: "",
        userId: 1,
        id: uuidv4()
    })

    let onChangeHandler = (e) => {
        setPost({
            ...post,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form className="post-form" onSubmit = {(e) => {
            e.preventDefault()
            addPost(post)
            // Try to clear the state of the post and generate a new id
            setPost({
                title: "",
                body: "",
                userId: 1,
                id: uuidv4()
            })
            e.target.reset()
        }}>
           
            <div>
                <label>Title  </label>
                <input 
                type="text" 
                name="title"    
                onChange={onChangeHandler}
                />
            </div>
            <div>
                <label>Body  </label>
                <input
                type="text"
                name="body"
                onChange={onChangeHandler}
                />
            </div>
            <button>Add Post</button>
        </form>
    )
}

export default AddPost