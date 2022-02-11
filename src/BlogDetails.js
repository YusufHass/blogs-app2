import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  //we want to see sepcific items details
  //so pass the name that you passed in the in App.js and NavBar.js
  const { id } = useParams();
  //custom hook commes from the useFetch component
  const {
    isPending,
    error,
    data: blogArray,
    name,
    searchAuthor,
    setSearchAuthor,
    setData: setBlogs,
  } = useFetch("http://localhost:8000/blogs/" + id);

  return (
    <div className="blog-details">
      <h1>Blog-{id}</h1>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blogArray && (
        <article>
          <div>
            <h2>{blogArray.title}</h2>
            <p>Written by {blogArray.author}</p>
            {blogArray.body}
          </div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
