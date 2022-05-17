import React, { useState } from 'react'

function EditPost({data, updatePost, setEditing}) {
    const [post, setPost] = useState({
        title: data.title,
        body: data.body,
        id: data.id,
        userId: data.userId
    })

    const onChangeHandler = (e) => {
        setPost({...post,
        [e.target.name]: e.target.value
        })
    }

    return(
        <form onSubmit = {(e) => {
            e.preventDefault()
            updatePost(post)
            setEditing(false)
        }}>
        {JSON.stringify(post)}
            <div>
                <input
                type="text"
                name="title" 
                value={post.title} 
                onChange={onChangeHandler}
                />
            </div>

            <div>
                <input
                type="text"
                name="body" 
                value={post.body} 
                onChange={onChangeHandler}
                />
            </div>

            <button>Confirm</button>
        </form>
    )
}

export default EditPost