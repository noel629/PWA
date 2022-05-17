import React, {useState} from 'react'
import '../styles/Post.css'
import Swal from 'sweetalert2'
import EditPost from '../components/forms/EditPost'

function Post({data, deletePost, updatePost}) {
    const [editing, setEditing] = useState(false)

    let deleteAlert = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                deletePost(id)
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
        })
    }

    

    return (
        <div className="post-card">
            {
                editing ? <EditPost data={data} updatePost={updatePost} setEditing={setEditing} /> :
                <>
                    <h3>{data.title}</h3>
                    <p>{data.body}</p>
                    <small>Author: {data.userId}</small>
                </>
            }

            <div>
            <button className="btn-edit" onClick={ () => setEditing(!editing) }> {editing? "Cancel" : "Edit"} </button>
            <button className="btn-dlt" onClick={ () => deleteAlert(data.id) }> Delete </button>
            </div>
        </div>
    )
}

export default Post