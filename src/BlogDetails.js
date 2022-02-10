import React from 'react'
import { useParams } from 'react-router-dom'

const BlogDetails = () => {
    //we want to see sepcific items details
    //so pass the name that you passed in the in App.js and NavBar.js
    const {id}=useParams();
  return (
    <div>
        <h1>This is Blog details-{id}</h1>
        </div>
  )
}

export default BlogDetails