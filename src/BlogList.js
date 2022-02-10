import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({ blogs, title, deleteHandler }) => {
  // const blogs= props.blog
  // const title= props.title
  // console.log(blogs, title)

  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          {/* this link directs to details of specifc items based on their id */}
          <Link to={`/blog-details/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p> Written by {blog.author}</p>
          </Link>

          {/* delete blog */}
          <button onClick={() => deleteHandler(blog.id)}>Delete blog</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
