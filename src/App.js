import React, {useEffect, useState} from 'react'
import Post from "./components/Post"
import AddPost from './components/forms/AddPost'

function App() {
  //Array Destructuring
  const [posts, setPosts] = useState([]) //Setting the posts to be an empty list

  useEffect( () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => setPosts(data)) // catch the data from the url to setPosts
  }, [])
  
  let deleteHandler = (id) => {
    let updatedPosts = posts.filter(post => post.id !== id)
    setPosts(updatedPosts)
  }
  
  let updateHandler = (updatedPost) => {
    setPosts(posts.map(post => post.id === updatedPost.id ? updatedPost : post))
  }

  let showPosts = posts.map(post => 
    <Post 
    data={post} 
    key={post.id} 
    deletePost={deleteHandler} 
    updatePost={updateHandler}
    />
    ).reverse()
  
  let addPostHandler = (newPost) => {
    setPosts([...posts, newPost])
  }

  return (
    <div className="App">
     <h1> All Posts </h1>
      <AddPost addPost={addPostHandler} />
     {showPosts}
    </div>
  );
}

export default App;
