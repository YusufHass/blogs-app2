import { getByDisplayValue } from '@testing-library/react'
import React, { useState } from 'react'

const Home2 = () => {
    const [blogs, setBlogs]= useState([
        { title: 'My new wesbsite', body: 'lorem ipsum...', author:'Mario', id:1},
        { title: 'Welcome party', body: 'lorem ipsum...', author: 'Moshi', id:2},
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Mario', id:3}
    ])

  return (
<div className= 'home'>
 {/* displaying the array */}
{blogs.map((blog) =>(
    <div className="blog-preview" key={blog.id}>
    <h1>{blog.title}</h1>
    <p> Written by {blog.author}</p>
    
    </div>
))}
    </div>
    
  )
}

export default Home2