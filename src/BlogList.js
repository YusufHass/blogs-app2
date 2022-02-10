import React from "react";

const BlogList = ({blogs, title, deleteHandler}) => {
    // const blogs= props.blog
    // const title= props.title
    // console.log(blogs, title)
    
  return (
    <div className="blog-list">
      <h1>{title}</h1>  
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p> Written by {blog.author}</p>
          {/* delete blog */}
          <button onClick={()=>deleteHandler(blog.id)}>Delete blog</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;